import React from 'react';
import {
  Card, CardImg, CardText, CardBody, CardLink,
  CardTitle, CardSubtitle
} from 'reactstrap';

const HouseCard = (props) => {
  return (
    <div>
      <Card>
        <CardBody>
  <CardTitle>{props.maison_dhote}</CardTitle>
  <CardSubtitle>{props.governorate},{props.sector}</CardSubtitle>
        </CardBody>
        <img width="100%" src="/assets/318x180.svg" alt="Card image cap" />
        <CardBody>
  <CardText>{props.num},{props.email}</CardText>
          <CardLink href={props.website}>Contact</CardLink>
        </CardBody>
      </Card>
    </div>
  );
};

export default HouseCard;