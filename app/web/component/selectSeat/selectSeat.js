import React, {
  Component
} from 'react';
import './selectSeat.css'

const LeftSeatNum = ({data = []}) => {
  console.log('LeftSeatNum', data);
  return (
    <table cellSpacing="0" cellPadding="0" className="seat_num" align="center">
      <tbody>
        {
          data.map((f, i) => {
            return <tr>
              <td width="30" className="row_nums">{i + 1}排</td>
            </tr>
          })
        }
      </tbody>
    </table>
  )
}

class DrawSeat extends Component {

  state = {
    checkedArr: [],
  }

  handleClick = (e) => {
    e.stopPropagation();
    let { id:seat_row_column } = e.target

    if(seat_row_column.includes('seat')) {
      let status = e.target.getAttribute("status")
      if(status == 0) {
        console.log(seat_row_column, status);
        const { checkedArr } = this.state
        if(!checkedArr.includes(seat_row_column)) {
          this.setState({
            checkedArr: [...checkedArr, seat_row_column]
          }, () => {
            const { onChange } = this.props
            onChange && onChange(this.state.checkedArr)
          })
          return
        }
        if(checkedArr.includes(seat_row_column)) {
          this.setState({
            checkedArr: checkedArr.filter(i => i !== seat_row_column)
          }, () => {
            const { onChange } = this.props
            onChange && onChange(this.state.checkedArr)
          })
          return
        }
      }else {
        console.log(seat_row_column, status);
      }
    }else {
      console.log(seat_row_column);
    }
  }

  render() {
    const { data } = this.props

    return (
      <table id="tbSeat" cellSpacing="0" cellPadding="0" className="seat_views" align="center">
        <tbody onClick={this.handleClick}>
          {
            data.map((row, row_i) => {
              return <tr>
                <td id="tbSeatTD" align="center">
                {
                  row.map((s, seat_i) => {
                    return <i className={s.status_class} id={`seat_${row_i}_${seat_i}`} rowname={row_i} colname={`${row_i}排${seat_i}座`} status={s.status} type={s.type}>&nbsp;</i>
                })
              }
              </td>
              </tr>
            })
          }
        </tbody>
      </table>
    )
  }
}

export default class SelectSeat extends Component {
  // status: -1(seat_null) 占位  0 (seat_ture)可选  1 (seat_false)已选

  state = {
      data: [[
        {status: 0, type: 0},
        {status: 0, type: 0},
        {status: 1, type: 0},
        {status: 0, type: 0},
        {status: 1, type: 0},
        {status: 0, type: 0},
      ],[
        {status: 0, type: 0},
        {status: -1, type: 0},
        {status: 1, type: 0},
        {status: 0, type: 0},
        {status: 1, type: 0},
        {status: 0, type: 0},
      ],[
        {status: 0, type: 0},
        {status: -1, type: 0},
        {status: 0, type: 0},
        {status: 0, type: 0},
        {status: -1, type: 0},
        {status: 0, type: 0}
      ],[
        {status: 0, type: 0},
        {status: -1, type: 0},
        {status: 1, type: 0},
        {status: 0, type: 0},
        {status: -1, type: 0},
        {status: 0, type: 0}
      ],[
        {status: 0, type: 0},
        {status: -1, type: 0},
        {status: 1, type: 0},
        {status: 0, type: 0},
        {status: -1, type: 0},
        {status: 0, type: 0}
      ]]
  }

  componentDidMount() {
    let { data=[] } = this.state
    data = data.map((row, row_id) => {
      return row.map((seat, column) => {
        seat.id = `seat_${row_id}_${column}`
        switch (seat.status) {
          case 0:
            seat.status_class = "seat_ture"
            break;
          case 1:
            seat.status_class = "seat_false"
            break;
          case -1:
            seat.status_class = "seat_null"
            break;
          default:
            seat.status_class = "seat_false"
        }
        return seat
      })
    })
    this.setState({data})
  }

  getChecked = (arr = []) => {
    console.log('已选:', arr.join(';'));
    let hasChecked = arr.join(';')
    let { data=[] } = this.state
    data = data.map((row, row_id) => {
      return row.map((seat, column) => {
        seat.id = `seat_${row_id}_${column}`
        switch (seat.status) {
          case 0:
            seat.status_class = "seat_ture"
            break;
          case 1:
            seat.status_class = "seat_false"
            break;
          case -1:
            seat.status_class = "seat_null"
            break;
          default:
            seat.status_class = "seat_false"
        }
        if(hasChecked.includes(seat.id)) {
          seat.status_class = "seat_selected"
        }
        return seat
      })
    })
    this.setState({data})
  }

  render() {
    const { data } = this.state
    return (
      <div className="p_r" id="seatContainer">
        <LeftSeatNum data={data}/>
        <div id="drawSeat" className="seat_selectout">
          <DrawSeat data={data} onChange={this.getChecked}/>
        </div>
      </div>
    )
  }
}


// <i className="seat_ture_sm" id="seat_0_0" rowname="1" colname="1排25座" status="0" type="0">&nbsp;</i>
// <i className="seat_ture_sm" id="seat_0_1" rowname="1" colname="1排24座" status="0" type="0">&nbsp;</i>
// <i className="seat_ture_sm" id="seat_0_2" rowname="1" colname="1排23座" status="0" type="0">&nbsp;</i>
// <i className="seat_ture_sm" id="seat_0_3" rowname="1" colname="1排22座" status="0" type="0">&nbsp;</i>
// <i className="seat_null_sm" id="seat_0_4" rowname="1" colname="0" status="-1" type="0">&nbsp;</i>
// <i className="seat_null_sm" id="seat_0_5" rowname="1" colname="0" status="-1" type="0">&nbsp;</i>
// <i className="seat_ture_sm" id="seat_0_6" rowname="1" colname="1排21座" status="0" type="0">&nbsp;</i>
// <i className="seat_ture_sm" id="seat_0_7" rowname="1" colname="1排20座" status="0" type="0">&nbsp;</i>
// <i className="seat_ture_sm" id="seat_0_8" rowname="1" colname="1排19座" status="0" type="0">&nbsp;</i>
// <i className="seat_ture_sm" id="seat_0_9" rowname="1" colname="1排18座" status="0" type="0">&nbsp;</i>
// <i className="seat_ture_sm" id="seat_0_10" rowname="1" colname="1排17座" status="0" type="0">&nbsp;</i>
// <i className="seat_ture_sm" id="seat_0_11" rowname="1" colname="1排16座" status="0" type="0">&nbsp;</i>
// <i className="seat_ture_sm" id="seat_0_12" rowname="1" colname="1排15座" status="0" type="0">&nbsp;</i>
// <i className="seat_ture_sm" id="seat_0_13" rowname="1" colname="1排14座" status="0" type="0">&nbsp;</i>
// <i className="seat_ture_sm" id="seat_0_14" rowname="1" colname="1排13座" status="0" type="0">&nbsp;</i>
// <i className="seat_ture_sm" id="seat_0_15" rowname="1" colname="1排12座" status="0" type="0">&nbsp;</i>
// <i className="seat_ture_sm" id="seat_0_16" rowname="1" colname="1排11座" status="0" type="0">&nbsp;</i>
// <i className="seat_ture_sm" id="seat_0_17" rowname="1" colname="1排10座" status="0" type="0">&nbsp;</i>
// <i className="seat_ture_sm" id="seat_0_18" rowname="1" colname="1排9座" status="0" type="0">&nbsp;</i>
// <i className="seat_ture_sm" id="seat_0_19" rowname="1" colname="1排8座" status="0" type="0">&nbsp;</i>
// <i className="seat_ture_sm" id="seat_0_20" rowname="1" colname="1排7座" status="0" type="0">&nbsp;</i>
// <i className="seat_ture_sm" id="seat_0_21" rowname="1" colname="1排6座" status="0" type="0">&nbsp;</i>
// <i className="seat_ture_sm" id="seat_0_22" rowname="1" colname="1排5座" status="0" type="0">&nbsp;</i>
// <i className="seat_null_sm" id="seat_0_23" rowname="1" colname="0" status="-1" type="0">&nbsp;</i>
// <i className="seat_null_sm" id="seat_0_24" rowname="1" colname="0" status="-1" type="0">&nbsp;</i>
// <i className="seat_ture_sm" id="seat_0_25" rowname="1" colname="1排4座" status="0" type="0">&nbsp;</i>
// <i className="seat_ture_sm" id="seat_0_26" rowname="1" colname="1排3座" status="0" type="0">&nbsp;</i>
// <i className="seat_ture_sm" id="seat_0_27" rowname="1" colname="1排2座" status="0" type="0">&nbsp;</i>
// <i className="seat_ture_sm" id="seat_0_28" rowname="1" colname="1排1座" status="0" type="0">&nbsp;</i>
