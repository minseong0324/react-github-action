import { fireEvent, render, screen } from "@testing-library/react";
import App from "./App";

test("the counters starts at 0", () => {
  render(<App />);
  const counterElement = screen.getByTestId("counter");
  expect(counterElement).toHaveTextContent(0); //toBe가 아니라..
});

test("minus button has correct text", () => {
  render(<App />);

  const buttonElement = screen.getByTestId("minus-button");
  expect(buttonElement).toHaveTextContent("-");
});

test("plus button has correct text", () => {
  render(<App />);
  const buttonElement = screen.getByTestId("plus-button");
  expect(buttonElement).toHaveTextContent("+");
});

test("square button has correct text", () => {
  render(<App />);
  const buttonElement = screen.getByTestId("square-button");
  expect(buttonElement).toHaveTextContent("^2");
});

test("reset button has correct text", () => {
  render(<App />);
  const buttonElement = screen.getByTestId("reset-button");
  expect(buttonElement).toHaveTextContent("reset");
});

test("When the + button is pressed, the counter changes to 1", () => {
  render(<App />); // App 컴포넌트를 렌더링합니다.
  const buttonElement = screen.getByTestId("plus-button");
  // "plus-button"이라는 테스트 ID를 가진 요소를 화면에서 찾아서 buttonElement 변수에 할당합니다.
  fireEvent.click(buttonElement);
  // buttonElement에 클릭 이벤트를 발생시킵니다. 이는 실제 사용자가 "+" 버튼을 클릭하는 것을 시뮬레이션합니다.
  const counterElement = screen.getByTestId("counter");
  // "counter"라는 테스트 ID를 가진 요소를 화면에서 찾아서 counterElement 변수에 할당합니다.
  expect(counterElement).toHaveTextContent(1);
  // counterElement의 텍스트 내용이 1인지 확인합니다. "+" 버튼을 클릭했으므로, 카운터 값이 0에서 1로 증가했어야 합니다.
});

// 테스트를 정의합니다. "on/off 버튼이 파란색인지"를 테스트하는 것입니다.
test("on/off button has blue color", () => {
  // 우리의 App 컴포넌트를 렌더링합니다. 이것은 테스트를 시작하기 위해 필요합니다.
  render(<App />);
  // "on/off-button" 이라는 데이터-testid 속성을 가진 요소를 선택합니다. 이 요소는 on/off 버튼을 가리킵니다.
  const buttonElement = screen.getByTestId("on/off-button");
  // 이 버튼의 배경색이 파란색인지 확인합니다.
  // 이 행은 "버튼 요소가 파란색 배경을 가지고 있는가?"를 테스트하는 expect 문입니다.
  expect(buttonElement).toHaveStyle({ backgroundColor: "blue" });
});

// 테스트 케이스를 정의합니다. 이 테스트는 on/off 버튼이 클릭되었을 때 -,+ 버튼이 눌리지 않도록 막는지를 확인합니다.
test("Prevent the -,+ button from being pressed when the on/off button is clicked", () => {
  // 우선, App 컴포넌트를 렌더링합니다.
  render(<App />);
  // on/off 버튼 요소를 화면에서 찾아 변수에 저장합니다. 이 요소는 'on/off-button'이라는 testid를 가지고 있습니다.
  const onOffButtonElement = screen.getByTestId("on/off-button");
  // on/off 버튼 요소에 클릭 이벤트를 발생시킵니다.
  fireEvent.click(onOffButtonElement);
  // + 버튼 요소를 화면에서 찾아 변수에 저장합니다. 이 요소는 'plus-button'이라는 testid를 가지고 있습니다.
  const plusButtonElement = screen.getByTestId("plus-button");
  // 이제 + 버튼이 비활성화되었는지 확인합니다. on/off 버튼이 클릭되었으므로, + 버튼은 비활성화되어야 합니다.
  expect(plusButtonElement).toBeDisabled();
});
