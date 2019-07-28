import React from "react";
// react plugin for creating notifications over the dashboard
import NotificationAlert from "react-notification-alert";

// reactstrap components
import {
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Row,
  Col,
  FormGroup,
  Input,
  Label,
  Table
} from "reactstrap";
import {
  LR_AUTONOMOUS_TRIBUTATION,
  LR_SIMPLIFIED_REGIME
} from "../../constants";

class LocalRenting extends React.Component {
  render() {
    let taxRate;
    if (this.props.tributationType === LR_AUTONOMOUS_TRIBUTATION) {
      taxRate = (
        <FormGroup className="col-md-6">
          <Label for="inputTaxaTributacao">Taxa Tributação</Label>
          <Input
            type="number"
            id="inputTaxaTributacao"
            placeholder="28"
            onChange={({ target: { value } }) =>
              this.props.setTributationTax(value)
            }
            value={this.props.tributationTax}
          />
        </FormGroup>
      );
    } else if (this.props.tributationType === LR_SIMPLIFIED_REGIME) {
      taxRate = (
        <FormGroup className="col-md-6">
          <Label for="inputTaxaEscalao">Taxa Escalão</Label>
          <Input
            type="number"
            id="inputTaxaEscalao"
            placeholder="23.6"
            onChange={({ target: { value } }) => this.props.setIrsTax(value)}
            value={this.props.irsTax}
          />
        </FormGroup>
      );
    }
    return (
      <React.Fragment>
        <div className="content">
          <div className="react-notification-alert-container">
            <NotificationAlert ref="notificationAlert" />
          </div>
          <Row>
            <Col md="8">
              <Card>
                <CardHeader>
                  <CardTitle tag="h4">Dados</CardTitle>
                </CardHeader>
                <CardBody>
                  <form>
                    <div className="form-row">
                      <FormGroup className="col-md-6">
                        <Label for="inputValorImovel">Valor Imóvel</Label>
                        <Input
                          type="number"
                          id="inputValorImovel"
                          placeholder="90000"
                          onChange={({ target: { value } }) =>
                            this.props.setPropertyValue(value)
                          }
                          value={this.props.propertyValue}
                        />
                      </FormGroup>
                      <FormGroup className="col-md-6">
                        <Label for="inputValorCondominio">
                          Valor Condomínio (Mensal)
                        </Label>
                        <Input
                          type="number"
                          id="inputValorCondominio"
                          placeholder="60"
                          onChange={({ target: { value } }) =>
                            this.props.setCondominiumValue(value)
                          }
                          value={this.props.condominiumValue}
                        />
                      </FormGroup>
                    </div>
                    <div className="form-row">
                      <FormGroup className="col-md-6">
                        <Label for="inputValorMedioNoite">
                          Valor Médio Noite
                        </Label>
                        <Input
                          type="number"
                          id="inputValorMedioNoite"
                          placeholder="600"
                          onChange={({ target: { value } }) =>
                            this.props.setNightAverageIncome(value)
                          }
                          value={this.props.nightAverageIncome}
                        />
                      </FormGroup>
                      <FormGroup className="col-md-6">
                        <Label for="inputSeguro">Valor Seguro</Label>
                        <Input
                          type="number"
                          id="inputSeguro"
                          placeholder="0"
                          onChange={({ target: { value } }) =>
                            this.props.setInsuranceValue(value)
                          }
                          value={this.props.insuranceValue}
                        />
                      </FormGroup>
                    </div>
                    <div className="form-row">
                      <FormGroup className="col-md-6">
                        <Label for="inputTaxaOcupacao">
                          Taxa Média Ocupação (%)
                        </Label>
                        <Input
                          type="number"
                          id="inputTaxaOcupacao"
                          placeholder="28"
                          onChange={({ target: { value } }) =>
                            this.props.setAverageOccupation(value)
                          }
                          value={this.props.averageOccupation}
                        />
                      </FormGroup>
                      <FormGroup className="col-md-6">
                        <Label for="inputDespesasExtraorinarias">
                          Despesas Extraordinárias (Anual)
                        </Label>
                        <Input
                          type="number"
                          id="inputDespesasExtraorinarias"
                          placeholder="200"
                          onChange={({ target: { value } }) =>
                            this.props.setExtraExpenses(value)
                          }
                          value={this.props.extraExpenses}
                        />
                      </FormGroup>
                    </div>
                    <div className="form-row">
                      <FormGroup className="col-md-6">
                        <Label for="inputDespesaOcupacao">
                          Despesa Por Ocupação (%)
                        </Label>
                        <Input
                          type="number"
                          id="inputDespesaOcupacao"
                          placeholder="200"
                          onChange={({ target: { value } }) =>
                            this.props.setOccupationExpense(value)
                          }
                          value={this.props.occupationExpense}
                        />
                      </FormGroup>
                      <div className="col-md-6">
                        <FormGroup className="formGroupNoMargin">
                          <Label>Tipo Tributação</Label>
                        </FormGroup>
                        <div className="tipoTributacao">
                          <FormGroup check inline className="form-check-radio">
                            <Label className="form-check-label">
                              <Input
                                type="radio"
                                name="tributationType"
                                id="autonomousTributation"
                                value={LR_AUTONOMOUS_TRIBUTATION}
                                onChange={({ target: { value } }) =>
                                  this.props.setTributationType(value)
                                }
                                defaultChecked={
                                  this.props.tributationType ===
                                  LR_AUTONOMOUS_TRIBUTATION
                                }
                              />
                              Tributação Autónoma
                              <span className="form-check-sign" />
                            </Label>
                          </FormGroup>
                          <FormGroup check inline className="form-check-radio">
                            <Label className="form-check-label">
                              <Input
                                type="radio"
                                name="tributationType"
                                id="simplifiedRegime"
                                value={LR_SIMPLIFIED_REGIME}
                                onChange={({ target: { value } }) =>
                                  this.props.setTributationType(value)
                                }
                                defaultChecked={
                                  this.props.tributationType ===
                                  LR_SIMPLIFIED_REGIME
                                }
                              />
                              Regime Simplificado
                              <span className="form-check-sign" />
                            </Label>
                          </FormGroup>
                        </div>
                      </div>
                    </div>
                    <div className="form-row">
                      <FormGroup className="col-md-6">
                        <Label for="inputValorIMI">Valor IMI (Anual)</Label>
                        <Input
                          type="number"
                          id="inputValorIMI"
                          placeholder="200"
                          onChange={({ target: { value } }) =>
                            this.props.setImiValue(value)
                          }
                          value={this.props.imiValue}
                        />
                      </FormGroup>
                      {taxRate}
                    </div>
                  </form>
                </CardBody>
              </Card>
            </Col>
            <Col md="4" className="results">
              <Row>
                <Col md="24">
                  <Card className="card_results">
                    <CardHeader>
                      <CardTitle tag="h4">Resultados</CardTitle>
                    </CardHeader>
                    <CardBody>
                      <Table className="table_results" responsive>
                        <thead>
                          <tr>
                            <th>Dado</th>
                            <th>Valor</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>Total custos anuais (s/ Impostos)</td>
                            <td>{this.props.totalExpenses}</td>
                          </tr>
                          <tr>
                            <td>
                              {this.props.tributationType ===
                              LR_AUTONOMOUS_TRIBUTATION
                                ? "Tributação"
                                : "IRS"}
                            </td>
                            <td>{this.props.totalTax}</td>
                          </tr>
                          <tr>
                            <td>Total Despesas</td>
                            <td>{this.props.totalExpensesWithTax}</td>
                          </tr>
                          <tr>
                            <td>Rendimento Líquido</td>
                            <td>{this.props.totalProfit}</td>
                          </tr>
                          <tr>
                            <td>Taxa Rentabilidade (%)</td>
                            <td>{this.props.profitabilityTax}</td>
                          </tr>
                          <tr>
                            <td>Prazo Retorno</td>
                            <td>{this.props.returnTime}</td>
                          </tr>
                        </tbody>
                      </Table>
                    </CardBody>
                  </Card>
                </Col>
              </Row>
            </Col>
          </Row>
        </div>
      </React.Fragment>
    );
  }
}

export default LocalRenting;
