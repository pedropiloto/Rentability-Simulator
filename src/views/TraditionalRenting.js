import React from "react";
import { connect } from "react-redux";
// react plugin for creating notifications over the dashboard
import NotificationAlert from "react-notification-alert";
import { traditionalRentingSelectors } from "./../store/selectors";

// reactstrap components
import {
  Button,
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

class TraditionalRenting extends React.Component {
  constructor(props) {
    super(props);
  }

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
    console.log(this.props.property_value);
    console.log(this.props.income_value);
    return (
      <>
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
                        />
                      </FormGroup>
                    </div>
                    <div className="form-row">
                      <FormGroup className="col-md-6">
                        <Label for="inputValorRenda">Valor Renda</Label>
                        <Input
                          type="number"
                          id="inputValorRenda"
                          placeholder="600"
                        />
                      </FormGroup>
                      <FormGroup className="col-md-6">
                        <Label for="inputOutrasDespesas">
                          Outras Despesas (Mensal)
                        </Label>
                        <Input
                          type="number"
                          id="inputOutrasDespesas"
                          placeholder="0"
                        />
                      </FormGroup>
                    </div>
                    <div className="form-row">
                      <FormGroup className="col-md-6">
                        <Label for="inputTaxaIRS">Taxa IRS (%)</Label>
                        <Input
                          type="number"
                          id="inputTaxaIRS"
                          placeholder="28"
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
                        />
                      </FormGroup>
                    </div>
                    <div className="form-row">
                      <FormGroup className="col-md-6">
                        <Label for="inputValorImovel">Valor IMI (Anual)</Label>
                        <Input
                          type="number"
                          id="inputValorIMI"
                          placeholder="200"
                        />
                      </FormGroup>
                      <FormGroup className="col-md-6">
                        <Label for="inputValorSeguro">Valor Seguro</Label>
                        <Input
                          type="number"
                          id="inputValorSeguro"
                          placeholder="200"
                        />
                      </FormGroup>
                    </div>
                    <Button
                      onClick={() => this.notifySuccess("bc")}
                      color="primary"
                    >
                      Calcular
                    </Button>
                  </form>
                </CardBody>
              </Card>
            </Col>
            <Col md="4" className="results">
              <Row>
                <Col md="12">
                  <Card className="card_results">
                    <CardHeader>
                      <CardTitle tag="h4">Despesas</CardTitle>
                    </CardHeader>
                    <CardBody>
                      <Table className="table_results" responsive>
                        <thead>
                          <tr>
                            <th>Resultado</th>
                            <th>Valor</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>Total custos anuais (s/ IRS)</td>
                            <td>1000</td>
                          </tr>
                          <tr>
                            <td>IRS</td>
                            <td>1000</td>
                          </tr>
                        </tbody>
                      </Table>
                    </CardBody>
                  </Card>
                </Col>
                <Col md="12" className="card_results">
                  <Card>
                    <CardHeader>
                      <CardTitle tag="h4">Receitas</CardTitle>
                    </CardHeader>
                    <CardBody>
                      <Table className="table_results" responsive>
                        <thead>
                          <tr>
                            <th>Resultado</th>
                            <th>Valor</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>Rendimento Líquido (Anual)</td>
                            <td>1000</td>
                          </tr>
                          <tr>
                            <td>Taxa Rentabilidade (%)</td>
                            <td>1000</td>
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
      </>
    );
  }
}

export const mapStateToProps = state => ({
  property_value: traditionalRentingSelectors.getPropertyValue(state),
  income_value: traditionalRentingSelectors.getIncomeValue(state)
});

export default connect(
  mapStateToProps,
  undefined
)(TraditionalRenting);
