module.exports = (sequelize, Sequelize) => {
    const Note = sequelize.define("notes", {     
      number: {
        type: Sequelize.STRING
      },
      contact: {
        type: Sequelize.STRING
      },
      phase: {
        type: Sequelize.STRING
      },
      perceantge: {
        type: Sequelize.INTEGER
      },
      missingPayment: {
        type: Sequelize.FLOAT
      },
      totalPayment:{
        type: Sequelize.FLOAT
      },
      branch:{
        type: Sequelize.STRING
      },
      subject:{
        type: Sequelize.STRING
      },
      monthlyPayment:{
        type: Sequelize.FLOAT
      },
      consultant:{
        type: Sequelize.STRING
      },
      coupleName: {
        type: Sequelize.STRING
      },
      phone:{
        type: Sequelize.STRING
      }
    });
  
    return Note;
  };
  