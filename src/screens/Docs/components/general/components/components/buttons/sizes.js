import React, { Component } from 'react'
import { Button, Radio, Icon } from 'antd';

class ExampleResult extends Component {

  constructor(props) {
    super(props);
    this.state = {
      size: 'large',
    };
  }
  

  handleSizeChange = (e) => {
    this.setState({ size: e.target.value });
  }

  render() {
    const {size} = this.state
    return (
      <div>
        <Radio.Group value={size} onChange={this.handleSizeChange}>
          <Radio.Button value="large">Large</Radio.Button>
          <Radio.Button value="default">Default</Radio.Button>
          <Radio.Button value="small">Small</Radio.Button>
        </Radio.Group>
        <br /><br />
        <Button type="primary" size={size}>Primary</Button> <span>&nbsp;</span>
        <Button size={size}>Normal</Button> <span>&nbsp;</span>
        <Button type="dashed" size={size}>Dashed</Button> <span>&nbsp;</span>
        <Button type="danger" size={size}>Danger</Button> <span>&nbsp;</span>
        <br /><br />
        <Button type="primary" shape="circle" icon="download" size={size} />
        <span>&nbsp;</span>
        <Button type="primary" icon="download" size={size}>Download</Button>
        <br /><br />
        <Button.Group size={size}>
          <Button type="primary">
            <Icon type="left" />Backward
          </Button>
          <Button type="primary">
            Forward<Icon type="right" />
          </Button>
        </Button.Group>
      </div>
    )
  }

}

export default {
  Result: ExampleResult,
  Meta:  () => (
    <p>
      There are <code>primary</code> button, <code>default</code> button, <code>dashed</code> button and <code>danger</code> button in antd.
    </p>
  ),
  metaTitle: 'Button Sizes',
  code: `
  import { Button, Radio, Icon } from 'antd';

  class ButtonSize extends React.Component {
    state = {
      size: 'large',
    };
  
    handleSizeChange = (e) => {
      this.setState({ size: e.target.value });
    }

    render() {
      const size = this.state.size;
      return (
        <div>
          <Radio.Group value={size} onChange={this.handleSizeChange}>
            <Radio.Button value="large">Large</Radio.Button>
            <Radio.Button value="default">Default</Radio.Button>
            <Radio.Button value="small">Small</Radio.Button>
          </Radio.Group>
          <br /><br />
          <Button type="primary" size={size}>Primary</Button>
          <Button size={size}>Normal</Button>
          <Button type="dashed" size={size}>Dashed</Button>
          <Button type="danger" size={size}>Danger</Button>
          <br />
          <Button type="primary" shape="circle" icon="download" size={size} />
          <Button type="primary" icon="download" size={size}>Download</Button>
          <br />
          <Button.Group size={size}>
            <Button type="primary">
              <Icon type="left" />Backward
            </Button>
            <Button type="primary">
              Forward<Icon type="right" />
            </Button>
          </Button.Group>
        </div>
      );
    }
  }
  
  ReactDOM.render(<ButtonSize />, mountNode);`
}