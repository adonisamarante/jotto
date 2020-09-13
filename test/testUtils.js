import checkPropTypes from "check-prop-types";

// note about this file: too many abstractions can make tests difficult to read
// it's not all bad to repeat some code in each test
// avoid separating the tests into pieces and files

export const findByTestAttr = (wrapper, val) => {
  return wrapper.find(`[data-test="${val}"]`);
};

export const checkProps = (component, conformingProps) => {
  const propError = checkPropTypes(
    component.propTypes,
    conformingProps,
    "prop",
    component.name
  );
  expect(propError).toBeUndefined();
};
