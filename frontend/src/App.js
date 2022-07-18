import Home from "./pages/Home";
import Payment from "./pages/Payment";
import Pricing from "./pages/Pricing";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import PrivateRouter from "./services/PrivateRouter";
import Checkout from "./pages/Payment-Note";
// import Success from "./components/checkout/stripe-checkout/success";
// import Canceled from "./components/checkout/stripe-checkout/canceled";
// import NotFound from "./pages/NotFound";

import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact element={<PrivateRouter />}>
        <Route path="/payment" element={<Payment />} />
        <Route path="/checkout" element={<Checkout />} />
      </Route>

      {/* <Route path="/success" component={Success} /> */}
      {/* <Route path="canceled" component={Canceled} /> */}

      <Route path="/pricing" element={<Pricing />} />
      <Route path="/signin" element={<Signin />} />
      <Route path="/signup" element={<Signup />} />
      {/* <Route path="*" element={<NotFound />} /> */}
    </Routes>
  );
}

export default App;
