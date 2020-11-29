import React, { Component } from 'react';
import { Form, FormGroup, FormLabel, FormControl, Button, ListGroup, ListGroupItem} from 'react-bootstrap';
class ProductAdministrationComponent extends Component{

    constructor(){

        super();
        this.state = {

            productTitle: "",
            imageUrl: "",
            description: "",
            price: "",
            quantity: "",
            productVisability: false
        }

    }


    handleChangeTitle = event => {
            
        this.setState({

            productTitle: event.target.value
        })

    }

    handleChangeUrl = event => {

        this.setState({

            
               imageUrl: event.target.value,
                
        })

        event.preventDefault();
    }

    handleChangeDesc = event => {

        this.setState({

            
               description: event.target.value,
                
        })

        event.preventDefault();
       
    }

    handleChangePrice = event => {

        this.setState({

               price: event.target.value,           
        })

        event.preventDefault();
        
    }

    handleChangeQ = event => {
        
        this.setState({

            quantity: event.target.value
        })

        event.preventDefault();

    }


    handleSubmit = event => {

            this.setState({

                 productVisability: true,
                
            })

            event.preventDefault();

            document.getElementById("productTitle").innerHTML = "Title: " + this.state.productTitle;
            document.getElementById("url").innerHTML = "Url: " + this.state.imageUrl;
            document.getElementById("desc").innerHTML = "Description: " + this.state.description;
            document.getElementById("price").innerHTML = "Price: " +this.state.price;
            document.getElementById("quantity").innerHTML = "Quantity: " + this.state.quantity;

            this.setState({

                
                productTitle: "",
                imageUrl: "",
                description: "",
                price : "",
                quantity: ""

           })

        }    

    render(){

        return(

            <div id="main">
            
               <Form className="w-50" onSubmit={this.handleSubmit}>
                <FormGroup>
                    <FormLabel>Title</FormLabel>
                    <FormControl onChange={this.handleChangeTitle} type="text" placeholder="Enter productTitle" value={this.state.productTitle}></FormControl>
                </FormGroup>
                <FormGroup>
                    <FormLabel>Image</FormLabel>
                    <FormControl onChange={this.handleChangeUrl} type="url" placeholder="Enter url of image" value={this.state.imageUrl}></FormControl>
                </FormGroup>
                <FormGroup>
                    <FormLabel>Description</FormLabel>
                    <FormControl onChange={this.handleChangeDesc}  type="text" placeholder="Enter description" value={this.state.description}></FormControl>
                </FormGroup>
                <FormGroup>
                    <FormLabel>Price</FormLabel>
                    <FormControl onChange={this.handleChangePrice} type="text" placeholder="Enter price" value={this.state.price}></FormControl>
                </FormGroup>
                <FormGroup>
                    <FormLabel>Quantity</FormLabel>
                    <FormControl onChange={this.handleChangeQ}  type="text" placeholder="Enter quantity" value={this.state.quantity}></FormControl>
                </FormGroup>
                <Button variant="primary" type="submit">
                    Save
                </Button>
            </Form>

                <ListGroup style={{ visibility: this.state.productVisability ? "visible" : "hidden"}}>
                <ListGroupItem id="productTitle"></ListGroupItem>
                <ListGroupItem id="url"></ListGroupItem>
                <ListGroupItem id="desc"></ListGroupItem>
                <ListGroupItem id="price"></ListGroupItem>
                <ListGroupItem id="quantity"></ListGroupItem>
                </ListGroup>

            </div>
                    
        )
    }

}

export default ProductAdministrationComponent;