import "dotenv/config";
import app from './app.js';


const PORT = process.env.PORT || 5000;


try {

    app.listen(PORT, () => {
        console.log(`Server is working on port ${PORT}`)
    })
    
} catch (error) {

    console.error('Error staring server:', error)
    
}