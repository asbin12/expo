
import React from "react";
import { Progress } from "antd";

const Analytics = ({ allTransaction }) => {

  //total transactions
  const totalNumberOfRent = allTransaction.length;
  const totalRentCollectedTransaction = allTransaction.filter(
    (transaction) => transaction.type === "rentCollected"
  );
  const totalRentRemainingTransaction = allTransaction.filter(
    (transaction) => transaction.type === "rentRemaining"
  );
  const totalRentCollectedPercent =
    (totalRentCollectedTransaction.length / totalNumberOfRent) * 100;
  const totalRentRemainingPercent =
    (totalRentRemainingTransaction.length / totalNumberOfRent) * 100;
  
  
  
const totalRentAmount = allTransaction.reduce(
  (acc, transaction) => acc + transaction.amount,
  0
);

const totalRentCollected = allTransaction
  .filter((transaction) => transaction.type === "rentCollected")
  .reduce((acc, transaction) => acc + transaction.amount, 0);

const totalRentRemaining = allTransaction
  .filter((transaction) => transaction.type === "rentRemaining")
  .reduce((acc, transaction) => acc + transaction.amount, 0);

const totalRentCollectedAmountPercent =
  (totalRentCollected / totalRentAmount) * 100;
const totalRentRemainingAmountPercent =
    (totalRentRemaining / totalRentAmount) * 100; 
  
    const totalNumberOfAdvanceCollected = allTransaction.filter(
      (transaction) => transaction.advanceAmount >= 1
  ).length;
  

  const totalNumberOfRentRemaining = allTransaction.filter(
    (transaction) => transaction.dueAmount >= 1
  ).length;

  const totalAmountAdvanceRentCollected = allTransaction
  .filter((transaction) => transaction.advanceAmount >=1)
    .reduce((acc, transaction) => acc + transaction.advanceAmount, 0);

const totalAmountDueRentRemaining = allTransaction
  .filter((transaction) => transaction.dueAmount >=1)
    .reduce((acc, transaction) => acc + transaction.dueAmount, 0);

  return (
    <>
      <div className="row m-3">
        <div className="col-md-4">
          {/* Total Transaction */}
          <div className="card">
            <div className="card-header">
              Total Number of Rent: {totalNumberOfRent}
            </div>
            <div className="card-body">
              <h5 className="text-success">
                Rent Collected: {totalRentCollectedTransaction.length}
              </h5>
              <h5 className="text-danger">
                Rent Remaining: {totalRentRemainingTransaction.length}
              </h5>
              <div className="d-flex flex-column align-items-center">
                <Progress
                  type="circle"
                  strokeColor={"green"}
                  className="mx-2"
                  percent={totalRentCollectedPercent.toFixed(0)}
                />
                <Progress
                  type="circle"
                  strokeColor={"red"}
                  className="mx-2 mt-3"
                  percent={totalRentRemainingPercent.toFixed(0)}
                />
              </div>
            </div>
          </div>
        </div>
      
        <div className="col-md-4">
          <div className="card">
            <div className="card-header">Total Rent Collection: {totalRentAmount}</div>
            <div className="card-body">
              <h5 className="text-success">Rent Collected: {totalRentCollected}</h5>
              <h5 className="text-danger">Rent Remaining: {totalRentRemaining}</h5>
              <div className="d-flex flex-column align-items-center">
                <Progress
                  type="circle"
                  strokeColor={"green"}
                  className="mx-2"
                  percent={totalRentCollectedAmountPercent.toFixed(0)}
                />
                <Progress
                  type="circle"
                  strokeColor={"red"}
                  className="mx-2 mt-3"
                  percent={totalRentRemainingAmountPercent.toFixed(0)}
                />
              </div>
            </div>
          </div>
        </div> 
        

        <div className="col-md-4">
          {/* Total Transaction */}
          <div className="card">
            <div className="card-header">
            Total Number of Rent: {totalNumberOfRent}
            </div>
            <div className="card-body">
              <h5 className="text-success">
                Number of advance Collected: {totalNumberOfAdvanceCollected}
              </h5>
            <h5 className="text-success">
                Advance Collected: {totalAmountAdvanceRentCollected}
              </h5>
            </div>
          </div>
          <div className="card mt-4">
            <div className="card-header">
            Total Number of Rent: {totalNumberOfRent}
            </div>
            <div className="card-body">
              
                <h5 className="text-danger">
                Number of Due Remaining: {totalNumberOfRentRemaining}
              </h5>
              <h5 className="text-danger">
                Due Amount Remaining: {totalAmountDueRentRemaining}
              </h5>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Analytics;
