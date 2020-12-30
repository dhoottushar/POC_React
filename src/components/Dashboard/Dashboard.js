import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Line, Bar } from "react-chartjs-2";
import { Card } from "../Card";
import styled from 'styled-components';
import Table from "../Table";
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
    columns,
    data1,
    data2
} from "../data";

const Styles = styled.div`
  padding: 1rem;

  table {
    border-spacing: 0;
    border: 1px solid black;

    tr {
      :last-child {
        td {
          border-bottom: 0;
        }
      }
    }

    th,
    td {
      margin: 0;
      padding: 0.5rem;
      border-bottom: 1px solid black;
      border-right: 1px solid black;

      :last-child {
        border-right: 0;
      }
    }
  }

  .pagination {
    padding: 0.5rem;
  }
`

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
                                            title="Tasks"
                                            category="Backend development"
                                            stats="Updated 3 minutes ago"
                                            statsIcon="fa fa-history"
                                            content={
                                                <div className="table-full-width">
                                                    <Styles>
          <Table columns={columns} data={data2} />
        </Styles>
                                                </div>
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
                                                    <Styles>
          <Table columns={columns} data={data1} />
        </Styles>
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
                                                    <Styles>
          <Table columns={columns} data={data1} />
        </Styles>
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
                                                    <Styles>
          <Table columns={columns} data={data1} />
        </Styles>
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
                                                    {/* <table className="table"> */}
                                                        {/* <Tasks /> */}
                                                        <Styles>
          <Table columns={columns} data={data1} />
        </Styles>
                                                    {/* </table> */}
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