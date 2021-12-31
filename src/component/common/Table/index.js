import * as React from "react";
import {Table} from "antd";
//分页 ，columns ，

export default class AbstractTable extends React.Component {
  static defaultProps = {
    method: () => {console.log("没有指定的method方法")},
    bordered:false
  }
  state = {
    dataSource: [],
    search: {}
  }
  defineColumns = () => {
    let columns = [{name:"ly"}];
    return columns;
  }

  componentDidMount () {
    this.filterHandler();
  }

  filterHandler = () => {
    this._listData();
  }

  _listData = () => {
    let {method} = this.props;
    method({}, (result) => {


    }, error => {

    })
  }

  render() {
    const {dataSource} = this.state.dataSource;
    const {bordered} = this.props.bordered;
    return <div>
      <Table columns={this.defineColumns()} dataSource={dataSource} bordered={bordered}
      />
    </div>
  }
}




// import {Table, Select, Row, Pagination, Popover, Icon} from "antd";
// import {useState, useEffect, useReducer, useRef,useContext} from "react";
// import flux from "./flux";
//
// const {Option} = Select;
// import constants from "./constants";
// import UtilTool from "../common/react16/UtilTool";
// import styles from "../common/react16/Table/index.less";
//
// //副作用：获取数据、设置订阅、手动修改DOM等是副作用   ;  hooks一般用来抽象逻辑，不返回 ui
// //useEffect第二个参数不能为引用类型，如果一定是引用类型的话，可以用JSON.stringify,或者useRef (没搞定)
// /*
// * 分页;{pagination:{pageSize,currentPage,total}}
// * filter {params}
// * */
//
// /*
// * columns 列名
// * listName 请求接口
// * */
// const defaultProps = {
//   columns: [],
//   method: () => {
//     console.log("没有定义请求方法")
//   },
//   showSizeChanger: true,
//   hidePagination: false,
//   paged: true,
//   pageRemote: true,
// }
//
// /*获取数据时需要触发的条件
// * 1.current
// * 2.pageSize
// * 3.filter*/
//
// function useAbstractTable(props) {
//   const {columns, method, hidePagination, paged, processResult, filterPanel, pageRemote} = props;
//   const [current, setCurrent] = useState(1);
//   const [pageSize, setPageSize] = useState(10);
//   const paginationInitial = {
//     current,
//     pageSize,
//     showSizeChanger: props.showSizeChanger || true,
//     pageSizeOptions: props.pageSizeOptions || ['10', '20', '30', '40'],
//     total: 0,
//     showTotal: (total, range) => {
//       let text = `共 ${pagination.total} 条记录`;
//       let comp = total === pagination.total ? null : <Popover content={`目前只能查看${pagination.total}条记录`}>
//         <Icon type="question-circle" theme="twoTone" style={{cursor: "pointer"}}/>
//       </Popover>
//       return <React.Fragment>
//         {text} {comp}
//       </React.Fragment>;
//     },
//   }
//   const [pagination, setPagination] = useState(paginationInitial);
//   const [dataSource, setDataSource] = useState([]);
//
//   useEffect(() => {
//     method({}, result => {
//       if (processResult) {
//         result = processResult(result);
//       }
//       pagination.total = result.length;
//       setPagination(pagination);
//       setDataSource(result);
//     })
//   }, [current, pageSize]);
//
//   function handleTableChange(pagination, filters, sorter) {
//     setCurrent(pagination.current);
//     setPageSize(pagination.pageSize);
//     setPagination(pagination);
//   }
//
//   function filterHandler(){
//
//   }
//
//   const handleFilterClick = ()=>{
//     console.log(1);
//   }
//
//   return (
//     [
//       filterPanel && filterPanel(),
//       <Row>
//         {UtilTool.emptyDefault(paged && !hidePagination, null, <Pagination
//           {...pagination}
//           className={styles.pagination}
//         />)}
//         <Table columns={columns}
//                dataSource={dataSource}
//                onChange={handleTableChange}
//                pagination={pagination}
//         />
//       </Row>
//     ]
//   )
// }
//
//
// function Index() {
//   const columns = [
//     {
//       title: '品种类型',
//       dataIndex: 'symbolType',
//       key: 'symbolType',
//       render: text => <a>{text}</a>,
//     },
//     {
//       title: '描述',
//       dataIndex: 'description',
//       key: 'description',
//     },
//   ];
//   const filterPanel = () => {
//     return <div onClick={handleFilterClick}>222</div>
//   }
//
//   const handleFilterClick = () => {
//
//   }
//
//   const preProcessResult = (result) => {
//     return result
//   }
//   const props = {columns, method: flux.actions.list, pageRemote: false, preProcessResult, filterPanel}
//   const Table = useAbstractTable(props);
//
//   return (
//     <div>{Table}</div>
//   )
// }
//
// export default Index;
//
//
//
