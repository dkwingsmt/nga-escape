import React, { Component } from 'react';
import PropTypes from 'prop-types';
import keycode from 'keycode';
import _ from 'lodash';

import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import { Button } from '@material-ui/core';

const jssClasses = () => ({
  textField: {
    width: '100%',
  },

  textFieldInput: {
    minHeight: '5em',
  },

  body: {
    maxWidth: 768,
    margin: 'auto',
    marginTop: 20,
  },

  buttons: {
    display: 'flex',
    justifyContent: 'flex-end',
    margin: '10px 20px',
  },
});

function between(cn, ca, cb) {
  const n = cn.charCodeAt(0);
  const a = ca.charCodeAt(0);
  const b = cb.charCodeAt(0);
  return n >= a && n <= b;
}

function escape(src) {
  return _(src)
    .map((c) => {
      if (
        between(c, '①', '⓿') ||
        between(c, '←', '↙')
      ) {
        return `&#${c.charCodeAt(0)};`;
      }
      return c;
    })
    .join('');
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      originalText: '',
      convertedText: '',
    };
    this.convertedInput = React.createRef();

    this.onClick = this.onClick.bind(this);
    this.onChange = this.onChange.bind(this);
    this.onKeyDown = this.onKeyDown.bind(this);
  }

  onClick() {
    this.doConvert();
  }

  onKeyDown(evt) {
    if (evt.ctrlKey && keycode.isEventKey(evt, 'enter')) {
      this.doConvert();
    }
  }

  onChange(evt) {
    this.setState({
      originalText: evt.target.value,
    });
  }

  doConvert() {
    this.setState(({ originalText }) => ({
      convertedText: escape(originalText),
    }), () => {
      if (this.convertedInput.current) {
        const ref = this.convertedInput.current;
        ref.focus();
        ref.select();
      }
    });
  }

  render() {
    const { classes } = this.props;
    const { convertedText, originalText } = this.state;

    return (
      <div className="App">
        <AppBar position="static">
          <Toolbar>
            <Typography variant="title" color="inherit">
              NGA Escape
            </Typography>
          </Toolbar>
        </AppBar>
        <Grid container className={classes.body}>
          <FormControl
            fullWidth
          >
            <TextField
              multiline
              className={classes.textField}
              label="转换前"
              placeholder="在这里输入你想要转换的文字……"
              value={originalText}
              onChange={this.onChange}
              onKeyDown={this.onKeyDown}
            />
            <div className={classes.buttons}>
              <Button
                variant="contained"
                color="primary"
                onClick={this.onClick}
              >
                {'转换（Ctrl-回车）'}
              </Button>
            </div>
            <TextField
              inputProps={{
                ref: this.convertedInput,
              }}
              readOnly
              multiline
              className={classes.textField}
              label="转换后"
              placeholder="这里将显示转换后的文字"
              value={convertedText}
            />
          </FormControl>
        </Grid>
      </div>
    );
  }
}

App.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(jssClasses)(App);
