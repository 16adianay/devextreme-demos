<template>
  <div class="form">
    <div class="dx-fieldset">
      <div class="dx-field">
        <div class="dx-field-label">Default mode</div>
        <div class="dx-field-value">
          <DxTextBox value="John Smith"/>
        </div>
      </div>
      <div class="dx-field">
        <div class="dx-field-label">With placeholder</div>
        <div class="dx-field-value">
          <DxTextBox placeholder="Enter full name here..."/>
        </div>
      </div>
      <div class="dx-field">
        <div class="dx-field-label">With clear button</div>
        <div class="dx-field-value">
          <DxTextBox
            :show-clear-button="true"
            value="John Smith"
          />
        </div>
      </div>
      <div class="dx-field">
        <div class="dx-field-label">Password mode</div>
        <div class="dx-field-value">
          <DxTextBox
            :show-clear-button="true"
            mode="password"
            placeholder="Enter password"
            value="f5lzKs0T"
          />
        </div>
      </div>
      <div class="dx-field">
        <div class="dx-field-label">Text mask</div>
        <div class="dx-field-value">
          <DxTextBox
            :mask-rules="rules"
            mask="+1 (X00) 000-0000"
          />
        </div>
      </div>
      <div class="dx-field">
        <div class="dx-field-label">Disabled</div>
        <div class="dx-field-value">
          <DxTextBox
            :disabled="true"
            value="John Smith"
          />
        </div>
      </div>
    </div>
    <div class="dx-fieldset">
      <div class="dx-fieldset-header">Events and API</div>
      <div class="dx-field">
        <div class="dx-field-label">Full Name</div>
        <div class="dx-field-value">
          <DxTextBox
            :show-clear-button="true"
            value="Smith"
            placeholder="Enter full name"
            value-change-event="keyup"
            @value-changed="valueChanged"
          />
        </div>
      </div>
      <div class="dx-field">
        <div class="dx-field-label">Email (read only)</div>
        <div class="dx-field-value">
          <DxTextBox
            :read-only="true"
            :hover-state-enabled="false"
            :value="emailValue"
          />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import DxTextBox from 'devextreme-vue/text-box';

export default {
  components: {
    DxTextBox,
  },
  data() {
    return {
      emailValue: 'smith@corp.com',
      rules: { X: /[02-9]/ },
    };
  },
  methods: {
    valueChanged(data) {
      this.emailValue = `${data.value.replace(/\s/g, '').toLowerCase()}@corp.com`;
    },
  },
};
</script>

