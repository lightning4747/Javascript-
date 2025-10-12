const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();
const PORT = 3000;

// Middleware to parse JSON bodies
app.use(express.json());
app.use(express.static('public'));

// File paths
const USERS_FILE = path.join(__dirname, 'users.json');
const TRANSACTIONS_FILE = path.join(__dirname, 'transactions.json');

// Initialize data files if they don't exist
function initializeFiles() {
    if (!fs.existsSync(USERS_FILE)) {
        fs.writeFileSync(USERS_FILE, JSON.stringify([]));
    }
    if (!fs.existsSync(TRANSACTIONS_FILE)) {
        fs.writeFileSync(TRANSACTIONS_FILE, JSON.stringify([]));
    }
}

// Read users from file
function readUsers() {
    try {
        const data = fs.readFileSync(USERS_FILE, 'utf8');
        return JSON.parse(data);
    } catch (error) {
        return [];
    }
}

// Write users to file
function writeUsers(users) {
    fs.writeFileSync(USERS_FILE, JSON.stringify(users, null, 2));
}

// Read transactions from file
function readTransactions() {
    try {
        const data = fs.readFileSync(TRANSACTIONS_FILE, 'utf8');
        return JSON.parse(data);
    } catch (error) {
        return [];
    }
}

// Write transactions to file
function writeTransactions(transactions) {
    fs.writeFileSync(TRANSACTIONS_FILE, JSON.stringify(transactions, null, 2));
}

// Generate unique ID
function generateId() {
    return Date.now().toString();
}

// API Routes

// Create account
app.post('/api/accounts', (req, res) => {
    const { name, initialDeposit = 0 } = req.body;
    
    if (!name) {
        return res.status(400).json({ error: 'Name is required' });
    }
    
    const users = readUsers();
    const newUser = {
        id: generateId(),
        name: name,
        balance: parseFloat(initialDeposit) || 0,
        createdAt: new Date().toISOString()
    };
    
    users.push(newUser);
    writeUsers(users);
    
    // Log transaction
    if (initialDeposit > 0) {
        const transactions = readTransactions();
        transactions.push({
            id: generateId(),
            userId: newUser.id,
            type: 'deposit',
            amount: parseFloat(initialDeposit),
            timestamp: new Date().toISOString()
        });
        writeTransactions(transactions);
    }
    
    res.json({ message: 'Account created successfully', user: newUser });
});

// Deposit money
app.post('/api/accounts/:id/deposit', (req, res) => {
    const { id } = req.params;
    const { amount } = req.body;
    
    if (!amount || amount <= 0) {
        return res.status(400).json({ error: 'Valid amount is required' });
    }
    
    const users = readUsers();
    const userIndex = users.findIndex(user => user.id === id);
    
    if (userIndex === -1) {
        return res.status(404).json({ error: 'User not found' });
    }
    
    users[userIndex].balance += parseFloat(amount);
    writeUsers(users);
    
    // Log transaction
    const transactions = readTransactions();
    transactions.push({
        id: generateId(),
        userId: id,
        type: 'deposit',
        amount: parseFloat(amount),
        timestamp: new Date().toISOString()
    });
    writeTransactions(transactions);
    
    res.json({ 
        message: 'Deposit successful', 
        newBalance: users[userIndex].balance 
    });
});

// Withdraw money
app.post('/api/accounts/:id/withdraw', (req, res) => {
    const { id } = req.params;
    const { amount } = req.body;
    
    if (!amount || amount <= 0) {
        return res.status(400).json({ error: 'Valid amount is required' });
    }
    
    const users = readUsers();
    const userIndex = users.findIndex(user => user.id === id);
    
    if (userIndex === -1) {
        return res.status(404).json({ error: 'User not found' });
    }
    
    if (users[userIndex].balance < amount) {
        return res.status(400).json({ error: 'Insufficient funds' });
    }
    
    users[userIndex].balance -= parseFloat(amount);
    writeUsers(users);
    
    // Log transaction
    const transactions = readTransactions();
    transactions.push({
        id: generateId(),
        userId: id,
        type: 'withdrawal',
        amount: parseFloat(amount),
        timestamp: new Date().toISOString()
    });
    writeTransactions(transactions);
    
    res.json({ 
        message: 'Withdrawal successful', 
        newBalance: users[userIndex].balance 
    });
});

// Get account balance
app.get('/api/accounts/:id/balance', (req, res) => {
    const { id } = req.params;
    
    const users = readUsers();
    const user = users.find(user => user.id === id);
    
    if (!user) {
        return res.status(404).json({ error: 'User not found' });
    }
    
    res.json({ 
        name: user.name, 
        balance: user.balance 
    });
});

// Get all accounts (for admin view)
app.get('/api/accounts', (req, res) => {
    const users = readUsers();
    res.json(users);
});

// Get transactions for a user
app.get('/api/accounts/:id/transactions', (req, res) => {
    const { id } = req.params;
    
    const transactions = readTransactions();
    const userTransactions = transactions.filter(t => t.userId === id);
    
    res.json(userTransactions);
});

// Serve the main page
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Initialize files and start server
initializeFiles();
app.listen(PORT, () => {
    console.log(`Bank system server running at http://localhost:${PORT}`);
    console.log('You can now open your browser and go to the above URL');
});