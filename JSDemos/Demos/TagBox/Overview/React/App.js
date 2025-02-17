import React from 'react';

import TagBox from 'devextreme-react/tag-box';
import ArrayStore from 'devextreme/data/array_store';

import Item from './Item.js';
import { simpleProducts, products } from './data.js';

const disabledValue = [simpleProducts[0]];

class App extends React.Component {
  constructor() {
    super();
    this.dataSource = new ArrayStore({
      data: products,
      key: 'Id',
    });
    this.state = {
      editableProducts: [...simpleProducts],
    };
    this.onCustomItemCreating = this.onCustomItemCreating.bind(this);
  }

  onCustomItemCreating(args) {
    const newValue = args.text;

    args.customItem = newValue;
    this.setState({
      editableProducts: [newValue, ...this.state.editableProducts],
    });
  }

  render() {
    return (
      <React.Fragment>
        <div className="dx-fieldset">
          <div className="dx-field">
            <div className="dx-field-label">Default mode</div>
            <div className="dx-field-value">
              <TagBox items={simpleProducts} />
            </div>
          </div>
          <div className="dx-field">
            <div className="dx-field-label">Search mode</div>
            <div className="dx-field-value">
              <TagBox items={simpleProducts}
                searchEnabled={true} />
            </div>
          </div>
          <div className="dx-field">
            <div className="dx-field-label">Batch selection</div>
            <div className="dx-field-value">
              <TagBox items={simpleProducts}
                showSelectionControls={true}
                applyValueMode="useButtons" />
            </div>
          </div>
          <div className="dx-field">
            <div className="dx-field-label">Hide selected items</div>
            <div className="dx-field-value">
              <TagBox items={simpleProducts}
                hideSelectedItems={true} />
            </div>
          </div>
          <div className="dx-field">
            <div className="dx-field-label">Single line mode</div>
            <div className="dx-field-value">
              <TagBox items={simpleProducts}
                multiline={false} />
            </div>
          </div>
          <div className="dx-field">
            <div className="dx-field-label">Add custom items</div>
            <div className="dx-field-value">
              <TagBox items={this.state.editableProducts}
                acceptCustomValue={true}
                onCustomItemCreating={this.onCustomItemCreating} />
            </div>
          </div>
          <div className="dx-field">
            <div className="dx-field-label">With custom placeholder</div>
            <div className="dx-field-value">
              <TagBox items={simpleProducts}
                placeholder="Choose Product..." />
            </div>
          </div>
          <div className="dx-field">
            <div className="dx-field-label">Disabled</div>
            <div className="dx-field-value">
              <TagBox items={simpleProducts}
                value={disabledValue}
                disabled={true} />
            </div>
          </div>
          <div className="dx-field">
            <div className="dx-field-label">Data source</div>
            <div className="dx-field-value">
              <TagBox dataSource={this.dataSource}
                displayExpr="Name"
                valueExpr="Id" />
            </div>
          </div>
          <div className="dx-field">
            <div className="dx-field-label">Custom template</div>
            <div className="dx-field-value">
              <TagBox dataSource={this.dataSource}
                displayExpr="Name"
                valueExpr="Id"
                itemRender={Item} />
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default App;
