import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

import { getMaps } from "./api/tempus";
import Config from "./components/config";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: false,
      maps: [],

      playerClass: "soldier",
      keybind: "mouse5",
      tier: 1,
      useRcon: false,
      date: "",

      // use separate values for form cos im lazy
      // and it's easy
      form_playerClass: "soldier",
      form_keybind: "mouse5",
      form_tier: 1,
      form_useRcon: false,
    };
  }

  onSubmit = () => {
    if (this.state.isLoading) return;

    this.setState({ isLoading: true }, () => {
      getMaps(this.state.form_tier, this.state.form_playerClass).then(
        (maps) => {
          this.setState((prevState) => {
            return {
              maps: maps,
              playerClass: prevState.form_playerClass,
              keybind: prevState.form_keybind,
              tier: prevState.form_tier,
              useRcon: prevState.form_useRcon,
              date: new Date(Date.now()).toISOString(),
              isLoading: false,
            };
          });
        }
      );
    });
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Form>
            <Form.Group controlid="formClass">
              <Form.Label>Class</Form.Label>
              <Form.Control
                as="select"
                value={this.state.form_playerClass}
                onChange={(e) => {
                  this.setState({ form_playerClass: e.target.value });
                }}
              >
                <option>soldier</option>
                <option>demoman</option>
              </Form.Control>
            </Form.Group>

            <Form.Group controlid="formTier">
              <Form.Label>Tier</Form.Label>
              <Form.Control
                as="select"
                value={this.state.form_tier}
                onChange={(e) => {
                  this.setState({ form_tier: Number(e.target.value) });
                }}
              >
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
                <option>6</option>
              </Form.Control>
            </Form.Group>

            <Form.Group controlid="formKeybind">
              <Form.Label>Keybind</Form.Label>
              <Form.Control
                type="text"
                value={this.state.form_keybind}
                onChange={(e) => {
                  this.setState({ form_keybind: e.target.value });
                }}
              />
              <Form.Text className="text-muted">
                The keybind you want to use for changing to the next map
              </Form.Text>
            </Form.Group>

            <Form.Group controlid="formRcon">
              <Form.Label>Rcon</Form.Label>
              <Form.Control
                type="checkbox"
                label="Use rcon"
                value={this.state.form_useRcon}
                onChange={(e) => {
                  this.setState({ form_useRcon: e.target.value });
                }}
              />
              <Form.Text className="text-muted">
                Should commands execute using rcon?
              </Form.Text>
            </Form.Group>

            <Button
              variant={this.state.isLoading ? "secondary" : "primary"}
              size="lg"
              onClick={this.onSubmit}
            >
              Go
            </Button>
          </Form>

          <Config
            className="mt-5"
            maps={this.state.maps}
            keybind={this.state.keybind}
            tier={this.state.tier}
            playerClass={this.state.playerClass}
            date={this.state.date}
            useRcon={this.state.useRcon}
          />
        </header>
      </div>
    );
  }
}

export default App;
