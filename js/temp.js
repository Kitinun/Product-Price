const InputField = ({ value, label, name, placeholder, type, onChange }) => (
  <div className="form-group">
    {label && <label htmlFor="input-field">{label}</label>}
    <input
      type={type}
      value={value}
      name={name}
      className="form-control"
      placeholder={placeholder}
      onChange={onChange}
    />
  </div>
);

///

class App extends React.Component {
  state = {
    option: null,
  };
  fun = (option) => {
    this.setState({ option });
  };
  render() {
    const { option } = this.state;

    return (
      <div>
        <label>Enter your name:
  <input type="text" />
</label>
        Select the one
        <Select value={option} onChange={this.fun} options={options} />
        <div class="small">Option selected: </div>
        {option && option.label}
      </div>
    );
  }
}