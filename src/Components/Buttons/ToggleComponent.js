import styled from "styled-components";

const ToggleComponent = (props) => {
  const { isToggled, onChange } = props;

  return (
    <ToggleSwitchLabel>
      <ToggleButton
        type="checkbox"
        role="switch"
        onChange={onChange}
        checked={isToggled}
        //   icons={{ checked: "🌙", unchecked: "🔆" }}
      />
      <Slider className="toggle_slider" />
    </ToggleSwitchLabel>
  );
};

export default ToggleComponent;

const ToggleButton = styled.input`
  opacity: 0;
  width: 0;
  height: 0;
  -webkit-tap-highlight-color: transparent;

  &:checked + .toggle_slider::before {
    transform: translateX(26px);
  }

  &:checked + .toggle_slider {
    background-color: ${(props) => props.theme.fusion_6};
  }
`;

const ToggleSwitchLabel = styled.label`
  position: relative;
  display: inline-block;
  width: 60px;
  height: 34px;

  background-color: ${(props) => props.theme.fusion_1};
  border-radius: 25px;
  margin-right: 12px;

  &:active,
  :hover,
  :focus {
    outline: 0;
    outline-offset: 0;
    border: 0;
    -webkit-tap-highlight-color: transparent;
  }
`;

const Slider = styled.span`
  position: absolute;
  cursor: pointer;

  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  background-color: ${(props) => props.theme.fusion_1};
  border-radius: 25px;
  transition: 0.4s;

  &:checked {
    transform: translateX(26px);
  }

  &::before {
    position: absolute;
    content: "";
    height: 26px;
    width: 26px;
    left: 4px;
    bottom: 4px;
    background-color: #fff;
    transition: 0.4s;
    border-radius: 25px;
  }
`;
