
// Importing routers from different modules.
import candidateRoutes from './candidateRoutes.js';
import electionRoutes from './electionRoutes.js';
import voterRoutes from './voterRoutes.js';


// Exporting a function that takes the express app object as an argument.
export default (app) => {
    app.use('/candidates', candidateRoutes);
    app.use('/elections', electionRoutes);
    app.use('/voters', voterRoutes);
};