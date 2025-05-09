const express = require("express"); 
const app = express();

const add = (n1, n2) => {
    return n1 + n2;
};

const subtract = (n1, n2) => {
    return n1 - n2;
};

const multiply = (n1, n2) => {
    return n1 * n2;
};

const divide = (n1, n2) => {
    return n1 / n2;
};

app.get("/add", (req, res) => {
    try {
        const n1 = parseFloat(req.query.n1);
        const n2 = parseFloat(req.query.n2);

        if (isNaN(n1)) {
            console.error("n1 is incorrectly defined");
            throw new Error("n1 is incorrectly defined");
        }
        if (isNaN(n2)) {
            console.error("n2 is incorrectly defined");
            throw new Error("n2 is incorrectly defined");
        }

        console.info(`Parameters ${n1} and ${n2} received for addition`);

        const result = add(n1, n2);

        res.status(200).json({
            success: true,
            status: 200,
            message: "Addition successful",
            data: result
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            success: false,
            status: 500,
            message: error.message || "Something went wrong",
            data: null
        });
    }
});

app.get("/subtract", (req, res) => {
    try {
        const n1 = parseFloat(req.query.n1);
        const n2 = parseFloat(req.query.n2);

        if (isNaN(n1)) {
            console.error("n1 is incorrectly defined");
            throw new Error("n1 is incorrectly defined");
        }
        if (isNaN(n2)) {
            console.error("n2 is incorrectly defined");
            throw new Error("n2 is incorrectly defined");
        }

        console.info(`Parameters ${n1} and ${n2} received for subtraction`);

        const result = subtract(n1, n2);

        res.status(200).json({
            success: true,
            status: 200,
            message: "Subtraction successful",
            data: result
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            success: false,
            status: 500,
            message: error.message || "Something went wrong",
            data: null
        });
    }
});

app.get("/multiply", (req, res) => {
    try {
        const n1 = parseFloat(req.query.n1);
        const n2 = parseFloat(req.query.n2);

        if (isNaN(n1)) {
            console.error("n1 is incorrectly defined");
            throw new Error("n1 is incorrectly defined");
        }
        if (isNaN(n2)) {
            console.error("n2 is incorrectly defined");
            throw new Error("n2 is incorrectly defined");
        }

        console.info(`Parameters ${n1} and ${n2} received for multiplication`);

        const result = multiply(n1, n2);

        res.status(200).json({
            success: true,
            status: 200,
            message: "Multiplication successful",
            data: result
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            success: false,
            status: 500,
            message: error.message || "Something went wrong",
            data: null
        });
    }
});

app.get("/divide", (req, res) => {
    try {
        const n1 = parseFloat(req.query.n1);
        const n2 = parseFloat(req.query.n2);

        if (isNaN(n1)) {
            console.error("n1 is incorrectly defined");
            throw new Error("n1 is incorrectly defined");
        }
        if (isNaN(n2)) {
            console.error("n2 is incorrectly defined");
            throw new Error("n2 is incorrectly defined");
        }
        if (n2 === 0) {
            console.error("Division by zero");
            throw new Error("Division by zero is not allowed");
        }

        console.info(`Parameters ${n1} and ${n2} received for division`);

        const result = divide(n1, n2);

        res.status(200).json({
            success: true,
            status: 200,
            message: "Division successful",
            data: result
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            success: false,
            status: 500,
            message: error.message || "Something went wrong",
            data: null
        });
    }
});

const port = 3040;
app.listen(port, () => {
    console.log("Hello, I'm listening to port " + port);
});
