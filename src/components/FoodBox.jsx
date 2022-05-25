import React from 'react';
import { Card, Col, Button, Row } from 'antd';

function FoodBox(props) {
  const { foods, clickToDelete} = props;
  const {name, image, calories, servings} = props.food;
     console.log(props);
    return (
    <Row>
      <Card title={name} style={{ width: 230, height: 300, margin: 10 }}>
        <img src={image} height={60} alt="food" />
        <p>Calories: {calories}</p>
        <p>Servings: {servings}</p>
        <p>
          <b>
            Total Calories: {calories * servings}
          </b>
          kcal
        </p>
        <Button onClick={() => clickToDelete(name)}> Delete </Button>
      </Card>
    </Row>
  );
}

export default FoodBox;