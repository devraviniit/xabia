import React, { Component } from 'react'
import { Card, UncontrolledPopover, CardTitle, PopoverHeader, PopoverBody, Col } from 'reactstrap';
export default class SearchResult extends Component {
 calHight = (population) => {
     let papulationLenth = population.length;
        return papulationLenth*10;
    }
    render() {
        return (
            <div>
                {
                    this.props.searchData && this.props.searchData.map((item, index) => (
                        
                        <div key={index} id={"PopoverLegacy" + index}  style={{marginBottom:'10px'}}>
                            <Col >
                                <Card body>
                                    <CardTitle style={{height: this.calHight(item.population)+'px',fontSize: this.calHight(item.population)+'px'}}>{item.name}</CardTitle>
                                </Card>
                            </Col>
                            <UncontrolledPopover key={item.name} trigger="legacy" placement="left" target={"PopoverLegacy" + index}>
                                <PopoverHeader>{item.name}</PopoverHeader>
                                <PopoverBody>
                                    <p>Rotation Period: {item.rotation_period}</p>
                                    <p>Orbital Period: {item.orbital_period}</p>
                                    <p>Diameter: {item.diameter}</p>
                                    <p>Climate : {item.climate}</p>
                                    <p>Gravity: {item.gravity}</p>
                                    <p>Terrain: {item.terrain}</p>
                                    <p>Surface Water: {item.surface_water}</p>
                                    <p>Population: {item.population}</p>
                                </PopoverBody>
                            </UncontrolledPopover>
                        </div>
                    ))
                }
            </div>
        )
    }
}
