import React, { Component } from "react";

// import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
// import ChartistGraph from "react-chartist";
import { Container, Row, Col } from "react-bootstrap";
import { Line, Bar } from "react-chartjs-2";
import { Card } from "../Card";
// import { StatsCard } from "components/StatsCard/StatsCard.jsx";
// import { Tasks } from "components/Tasks/Tasks.jsx";
import {
    dataPie,
    legendPie,
    dataSales,
    optionsSales,
    responsiveSales,
    legendSales,
    dataBar,
    optionsBar,
    responsiveBar,
    legendBar,
    chartExample1,
    chartExample2,
    chartExample3,
} from "../data";

class Dashboard extends Component {
    createLegend(json) {
        var legend = [];
        for (var i = 0; i < json["names"].length; i++) {
            var type = "fa fa-circle text-" + json["types"][i];
            legend.push(<i className={type} key={i} />);
            legend.push(" ");
            legend.push(json["names"][i]);
        }
        return legend;
    }
    render() {
        return (
            <div className="content">
                <Container fluid>
                    <Row className="row-margin">
                        <Col md={4}>
                            <Card
                                statsIcon="fa fa-history"
                                id="chartHours"
                                title="Users Behavior"
                                category="24 Hours performance"
                                stats="Updated 3 minutes ago"
                                content={
                                    <div className="ct-chart">

                                        <Line
                                            data={chartExample1["data1"]}
                                            options={chartExample1.options}
                                        />
                                    </div>
                                }
                                legend={
                                    <div className="legend">{this.createLegend(legendSales)}</div>
                                }
                            />
                        </Col>
                        <Col md={4}>
                            <Card
                                statsIcon="fa fa-history"
                                id="chartHours"
                                title="Users Behavior"
                                category="24 Hours performance"
                                stats="Updated 3 minutes ago"
                                content={
                                    <div className="ct-chart">
                                        <Bar
                                            data={chartExample3.data}
                                            options={chartExample3.options}
                                        />
                                    </div>
                                }
                                legend={
                                    <div className="legend">{this.createLegend(legendSales)}</div>
                                }
                            />
                        </Col>
                        <Col md={4}>
                            <Card
                                statsIcon="fa fa-clock-o"
                                title="Email Statistics"
                                category="Last Campaign Performance"
                                stats="Campaign sent 2 days ago"
                                content={
                                    <div
                                        id="chartPreferences"
                                        className="ct-chart ct-perfect-fourth"
                                    >
                                        <Line
                                            data={chartExample2.data}
                                            options={chartExample2.options}
                                        />
                                    </div>
                                }
                                legend={
                                    <div className="legend">{this.createLegend(legendPie)}</div>
                                }
                            />
                        </Col>
                    </Row>

                    <Row className="row-margin">
                        <Col md={4}>
                            <Card
                                id="chartActivity"
                                title="2014 Sales"
                                category="All products including Taxes"
                                stats="Data information certified"
                                statsIcon="fa fa-check"
                                content={
                                    <div className="ct-chart">
                                        
                                    </div>
                                }
                                legend={
                                    <div className="legend">{this.createLegend(legendBar)}</div>
                                }
                            />
                        </Col>

                        <Col md={8}>

                            <Container fluid>
                                <Row className="row-margin">
                                    <Col md={6}>
                                        <Card
                                            title="Tasks"
                                            category="Backend development"
                                            stats="Updated 3 minutes ago"
                                            statsIcon="fa fa-history"
                                            content={
                                                <div className="table-full-width">
                                                    <table className="table">
                                                        {/* <Tasks /> */}
                                                    </table>
                                                </div>
                                            }
                                        />
                                    </Col>
                                    <Col md={6}>
                                        <Card
                                            title="Tasks"
                                            category="Backend development"
                                            stats="Updated 3 minutes ago"
                                            statsIcon="fa fa-history"
                                            content={
                                                <div className="table-full-width">
                                                    <table className="table">
                                                        {/* <Tasks /> */}
                                                    </table>
                                                </div>
                                            }
                                        />
                                    </Col>
                                </Row>
                                <Row className="row-margin">
                                    <Col md={6}>
                                        <Card
                                            title="Tasks"
                                            category="Backend development"
                                            stats="Updated 3 minutes ago"
                                            statsIcon="fa fa-history"
                                            content={
                                                <div className="table-full-width">
                                                    <table className="table">
                                                        {/* <Tasks /> */}
                                                    </table>
                                                </div>
                                            }
                                        />
                                    </Col>
                                    <Col md={6}>
                                        <Card
                                            title="Tasks"
                                            category="Backend development"
                                            stats="Updated 3 minutes ago"
                                            statsIcon="fa fa-history"
                                            content={
                                                <div className="table-full-width">
                                                    <table className="table">
                                                        {/* <Tasks /> */}
                                                    </table>
                                                </div>
                                            }
                                        />
                                    </Col>
                                </Row>
                            </Container>

                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default Dashboard;