import React from 'react'
import Accordion from 'react-bootstrap/Accordion';
import Spinner from 'react-bootstrap/Spinner';
import Image from 'react-bootstrap/Image';

function Blogs({ Blogs }) {

    // if blogs takes some time to load then show a spinner
    if (!Blogs) {
        return (
            <>
                <div className="text-center text-info mt-5 mb-5">
                    <h1 className='d-flex align-items-center justify-content-center'>
                        <Spinner animation="grow" />
                        Loading
                        <Spinner animation="grow" />
                    </h1>
                </div>
            </>
        )
    }


    // if blogs is empty then show a message
    if (Blogs.length === 0) {
        return (
            <div className="text-center text-danger mt-5 mb-5">
                <h1>Blogs Not Found</h1>
            </div>
        )
    }



    return (
        <>
            <div className="container mt-5 mb-5">
                <Accordion defaultActiveKey="0">
                    {
                        Blogs.map((item, index) => {
                            return (
                                <Accordion.Item eventKey={`${index}`} key={index}>
                                    <Accordion.Header>{`${item.title} - ${item.description}`}</Accordion.Header>
                                    <Accordion.Body>
                                        <div className="text-center text-info mt-5 mb-5">
                                            <Image src={`${item.image}`} thumbnail />
                                        </div>
                                        {item.blog}
                                    </Accordion.Body>
                                </Accordion.Item>
                            )
                        })
                    }
                </Accordion>
            </div >
        </>
    )
}

export default Blogs