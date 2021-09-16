import { connect } from 'react-redux'
import { IRootState } from './store/reducers'

import { deposit, withdraw } from './store/reducers/account'

interface IAccountProps extends StateProps, DispatchProps {}

function App({ amount, deposit, withdraw }: IAccountProps) {
  return (
    <div className="App">
      {amount}
      <button onClick={() => deposit(1000)}>Deposit</button>
      <button onClick={() => withdraw(1000)}>Withdraw</button>
    </div>
  )
}

const mapStateToProps = ({ account }: IRootState) => ({
  amount: account
})

const mapDispatchToProps = { deposit, withdraw }

type StateProps = ReturnType<typeof mapStateToProps>
type DispatchProps = typeof mapDispatchToProps

export default connect(mapStateToProps, mapDispatchToProps)(App)
