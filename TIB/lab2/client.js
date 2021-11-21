const socket = io("ws://localhost:3000");

console.log(bill);

socket.on('data', (newData) => {
  console.log('New Data', newData);
  bill.value = newData;
});

const onSubmit = () => {
  console.log('sending');
  console.log(bill.value);
  socket.emit("data", bill.value);
}