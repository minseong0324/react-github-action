import "./App.css";
import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  // "disabled"라는 상태를 만들고, 초기값을 false로 설정합니다.
  // 이 상태는 "-"와 "+" 버튼이 비활성화되어 있는지(즉, 클릭할 수 없는 상태인지) 나타냅니다.
  const [disabled, setDisabled] = useState(false);

  return (
    <div className='App'>
      <header className='App-header'>
        <h3 data-testid='counter'>{count}</h3>
        <button
          data-testid='minus-button'
          onClick={() => setCount((prev) => prev - 1)}
          // disabled 속성을 설정하여 이 버튼이 비활성화 될 수 있도록 합니다.
          // "disabled" 상태가 true이면 버튼은 비활성화되고, false이면 활성화됩니다.
          disabled={disabled}
        >
          -
        </button>
        <button
          data-testid='plus-button'
          onClick={() => setCount((prev) => prev + 1)}
          // "+" 버튼에도 disabled 속성을 설정하여 이 버튼이 비활성화 될 수 있도록 합니다.
          disabled={disabled}
        >
          +
        </button>
        <button
          data-testid='square-button'
          onClick={() => setCount((prev) => prev ** 2)}
          // "+" 버튼에도 disabled 속성을 설정하여 이 버튼이 비활성화 될 수 있도록 합니다.
          disabled={disabled}
        >
          ^2
        </button>
        <button
          data-testid='reset-button'
          onClick={() => setCount((prev) => 0)}
          // "+" 버튼에도 disabled 속성을 설정하여 이 버튼이 비활성화 될 수 있도록 합니다.
          disabled={disabled}
        >
          reset
        </button>
        <div>
          {/* 버튼 요소를 생성합니다. */}
          <button
            // 이 버튼의 배경색을 파란색으로 설정합니다.
            style={{ backgroundColor: "blue" }}
            // 데이터-testid 속성을 'on/off-button'으로 설정합니다.
            // 이 속성은 테스트할 때 이 버튼을 식별하는 데 사용됩니다.
            data-testid='on/off-button' // 이 버튼의 텍스트를 'on/off'로 설정합니다. on/off
            // 이 버튼을 클릭하면 "setDisabled" 함수를 호출하여 "disabled" 상태를 현재와 반대로 변경합니다.
            // 즉, 이 버튼을 클릭하면 "-"와 "+" 버튼의 활성화/비활성화 상태가 전환됩니다.
            onClick={() => setDisabled((prev) => !prev)}
          >
            on/off
          </button>
        </div>
      </header>
    </div>
  );
}

export default App;
