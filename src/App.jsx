import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
//Layouts
import BaseLayout from './layouts/BaseLayout';
import AuthenticatedLayout from './layouts/AuthenticatedLayout';
import GuestLayout from './layouts/GuestLayout';
//Base pages
import Home from './pages/Home';
import Checkout from './pages/Checkout';

//Auth Pages
import Login from './pages/auth/Login';
import ForgotPassword from './pages/auth/ForgotPassword';
import ResetPassword from './pages/auth/ResetPassword';

// Admin Pages
import AdminDashboard from './pages/admin/Dashboard';
import Users from './pages/admin/Users';
import Transactions from './pages/admin/Transactions';
import Investments from './pages/admin/Investments';
import CopyTrade from './pages/admin/CopyTrade';
import AdminCopytradeInvestments from './pages/admin/CopytradeInvestments';
import Plans from './pages/admin/Plans';
import PaymentOptions from './pages/admin/PaymentOptions';


// Investor Pages
import InvestorDashboard from './pages/investors/Dashboard';
import InvestorInvestments from './pages/investors/Investments';
import CopyTradeInvestments from './pages/investors/CopyTradeInvestments';
import InvestorTransactions from './pages/investors/Transactions';
import Deposit from './pages/investors/Deposit';
import Withdrawal from './pages/investors/Withdrawal';
import InvestorSettings from './pages/investors/Settings'

// Others
import NotFound from './pages/NotFound';
import Error from './components/Error';
import { requireAuth } from './utils/protect';

function App() {
  const router = createBrowserRouter(createRoutesFromElements(
    <>
      <Route path='/' element={<BaseLayout />}errorElement={<Error />} >
        <Route index element={<Home />} />
      </Route>
      <Route path='/checkout' element={<Checkout />} />
      {/* Auth Routes - Wrapped in GuestLayout */}
        <Route path="/" element={<GuestLayout />} errorElement={<Error />}>
          <Route path="login" element={<Login />} />
          <Route path="forgot-password" element={<ForgotPassword />} />
          <Route path="reset-password" element={<ResetPassword />} />
          {/* <Route path="reset-password/:token" element={<ResetPassword/>}/> */}
        </Route>
      <Route path='/login' element={<Login />} />

      {/* Authenticated Routes */}
      <Route path="/" element={<AuthenticatedLayout />} errorElement={<Error />}>
        {/* Admin Related Routes */}
        <Route path="admin" loader={async ({ request }) => await requireAuth(request, 'admin')}>
          <Route path="dashboard" element={<AdminDashboard />} />
          <Route path="users" element={<Users />} />
          <Route path="plans" element={<Plans />} />
          <Route path="transactions" element={<Transactions />} />
          <Route path="investments" element={<Investments />} />
          <Route path="copy_trade" element={<CopyTrade />} />
          <Route path="copy_trade_investments" element={<AdminCopytradeInvestments />} />
          <Route path='payment_options' element={<PaymentOptions />}></Route>

        </Route>

        {/* Investor Related Routes */}
        <Route path="investor" loader={({ request }) => requireAuth(request, 'user')}>
          <Route path="dashboard" element={<InvestorDashboard />} />
          <Route path='investments' element={<InvestorInvestments />} />

          <Route path='copy_trades' element={<CopyTradeInvestments />} />
          <Route path='transactions' element={<InvestorTransactions />} />
          <Route path='deposit' element={<Deposit />} />
          <Route path='withdrawal' element={<Withdrawal />} />
          <Route path='settings' element={<InvestorSettings />} />
        </Route>
      </Route>
      {/* Catch-all Route */}
      <Route path="*" element={<NotFound />} errorElement={<Error />}/>
    </>
  ))
  return (
    <RouterProvider router={router} />
  );
}

export default App;