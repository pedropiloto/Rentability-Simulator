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

class TraditionalRenting extends React.Component {
  notifySuccess = place => {
    var options = {};
    options = {
      place: place,
      message: (
        <div>
          <div>
            <b>Sucesso</b>
          </div>
        </div>
      ),
      type: "success",
      icon: "tim-icons icon-check-2",
      autoDismiss: 7
    };
    this.refs.notificationAlert.notificationAlert(options);
  };

  notifyError = place => {
    var options = {};
    options = {
      place: place,
      message: (
        <div>
          <div>
            <b>Erro</b>
          </div>
        </div>
      ),
      type: "danger",
      icon: "tim-icons icon-alert-circle-exec",
      autoDismiss: 7
    };
    this.refs.notificationAlert.notificationAlert(options);
  };

  render() {
    const {
      propertyValue,
      tributationType,
      totalExpenses,
      totalExpensesWithIRS,
      totalIRS,
      totalProfit,
      profitabilityTax,
      returnTime,
      setPropertyValue,
      setTributationType
    } = this.props;
    console.log(tributationType);
    let taxRate;
    if (tributationType === LR_AUTONOMOUS_TRIBUTATION) {
      taxRate = (
        <FormGroup className="col-md-6">
          <Label for="inputTaxaTributacao">Taxa Tributação</Label>
          <Input
            type="number"
            id="inputTaxaTributacao"
            placeholder="28"
            onChange={({ target: { value } }) =>
              //setInsuranceValue(value)
              {}
            }
            //value={insuranceValue}
          />
        </FormGroup>
      );
    } else if (tributationType === LR_SIMPLIFIED_REGIME) {
      taxRate = (
        <FormGroup className="col-md-6">
          <Label for="inputTaxaEscalao">Taxa Escalão</Label>
          <Input
            type="number"
            id="inputTaxaEscalao"
            placeholder="23.6"
            onChange={({ target: { value } }) =>
              //setInsuranceValue(value)
              {}
            }
            //value={insuranceValue}
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
                            setPropertyValue(value)
                          }
                          value={propertyValue}
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
                            //setCondominiumValue(value)
                            {}
                          }
                          //value={condominiumValue}
                        />
                      </FormGroup>
                    </div>
                    <div className="form-row">
                      <FormGroup className="col-md-6">
                        <Label for="inputValorRenda">Valor Médio Noite</Label>
                        <Input
                          type="number"
                          id="inputValorRenda"
                          placeholder="600"
                          onChange={({ target: { value } }) =>
                            //setIncomeValue(value)
                            {}
                          }
                          //value={incomeValue}
                        />
                      </FormGroup>
                      <FormGroup className="col-md-6">
                        <Label for="inputOutrasDespesas">Valor Seguro</Label>
                        <Input
                          type="number"
                          id="inputOutrasDespesas"
                          placeholder="0"
                          onChange={({ target: { value } }) =>
                            //setOtherExpenses(value)
                            {}
                          }
                          //value={otherExpenses}
                        />
                      </FormGroup>
                    </div>
                    <div className="form-row">
                      <FormGroup className="col-md-6">
                        <Label for="inputTaxaIRS">
                          Taxa Média Ocupação (%)
                        </Label>
                        <Input
                          type="number"
                          id="inputTaxaIRS"
                          placeholder="28"
                          onChange={({ target: { value } }) =>
                            //setIRSTax(value)
                            {}
                          }
                          //value={iRSTax}
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
                            //setExtraExpenses(value)
                            {}
                          }
                          //value={extraExpenses}
                        />
                      </FormGroup>
                    </div>
                    <div className="form-row">
                      <FormGroup className="col-md-6">
                        <Label for="inputValorImovel">
                          Despesa Por Ocupação (%)
                        </Label>
                        <Input
                          type="number"
                          id="inputValorIMI"
                          placeholder="200"
                          onChange={({ target: { value } }) =>
                            //setIMIValue(value)
                            {}
                          }
                          //value={imiValue}
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
                                  setTributationType(value)
                                }
                                defaultChecked={
                                  tributationType === LR_AUTONOMOUS_TRIBUTATION
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
                                  setTributationType(value)
                                }
                                defaultChecked={
                                  tributationType === LR_SIMPLIFIED_REGIME
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
                        <Label for="inputValorImovel">Valor IMI (Anual)</Label>
                        <Input
                          type="number"
                          id="inputValorIMI"
                          placeholder="200"
                          onChange={({ target: { value } }) =>
                            //setIMIValue(value)
                            {}
                          }
                          //value={imiValue}
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
                            <td>Total custos anuais (s/ IRS)</td>
                            <td>{totalExpenses}</td>
                          </tr>
                          <tr>
                            <td>IRS</td>
                            <td>{totalIRS}</td>
                          </tr>
                          <tr>
                            <td>Total Despesas</td>
                            <td>{totalExpensesWithIRS}</td>
                          </tr>
                          <tr>
                            <td>Rendimento Líquido (Anual)</td>
                            <td>{totalProfit}</td>
                          </tr>
                          <tr>
                            <td>Taxa Rentabilidade (%)</td>
                            <td>{profitabilityTax}</td>
                          </tr>
                          <tr>
                            <td>Prazo Retorno</td>
                            <td>{returnTime}</td>
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

export default TraditionalRenting;
