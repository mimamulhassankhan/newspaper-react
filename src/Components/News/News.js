import React from 'react';
import {Card, Button} from 'react-bootstrap';

const News = (props) => {
    const {description, title, author, url} = props.data;
    console.log(props.data);
    return (
        <Card className="w-25 m-4 shadow border border-success">
            <Card.Header>Featured</Card.Header>
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Subtitle>{author}</Card.Subtitle>
                    <Card.Text>{description}</Card.Text>
                    <Button className="border border-success" href={url} variant="danger">Read More</Button>
                </Card.Body>
        </Card>
    );
};

export default News;