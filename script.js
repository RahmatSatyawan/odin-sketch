const DEFAULT_SIZE = 16;

const rowsInput = document.getElementById("rows");
const colsInput = document.getElementById("columns");
const grid = document.getElementById("grid");
const msg = document.getElementById("message");

const gridBtn = document.getElementById("button-select");
const resetBtn = document.getElementById("button-reset");

function reset() {
  grid.innerHTML = "";
  msg.textContent = "Message";
}

function message(cols, rows) {
  if (
    colsInput.value &&
    rowsInput.value &&
    colsInput.value !== "0" &&
    rowsInput.value !== "0"
  ) {
    msg.textContent = `${cols} x ${rows}`;
  } else {
    msg.textContent = "Please input a valid number";
  }
}

function createGrid(cols, rows) {
  reset();
  message(cols, rows);

  for (let i = 0; i < cols; i++) {
    const col = document.createElement("div");
    col.classList.add("cols");

    for (let j = 0; j < rows; j++) {
      const cell = document.createElement("div");
      cell.classList.add("cell");
      cell.addEventListener("click", () => {
        cell.style.backgroundColor = "blue"; // Change the color here
      });
      col.appendChild(cell);
    }

    grid.appendChild(col);
  }
}

function main() {
  gridBtn.addEventListener("click", () => {
    var rows = parseInt(rowsInput.value);
    var cols = parseInt(colsInput.value);

    // Filter the input values
    cols = Math.max(1, Math.min(cols, 100));
    rows = Math.max(1, Math.min(rows, 100));

    createGrid(cols, rows);
  });

  resetBtn.addEventListener("click", () => {
    reset();
  });

  createGrid(DEFAULT_SIZE);
}

main();
