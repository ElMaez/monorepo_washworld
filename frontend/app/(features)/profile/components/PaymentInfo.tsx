export default function PaymentInfo() {
  return (
    <section>
      <h2 id="payment-heading">Mine Betalingskort</h2>
        <select name="payment_method">
          <option value=""></option>
          <option value="card1">Visa</option>
          <option value="card2">MasterCard </option>
        </select>
    </section>
  );
}