import styled from "styled-components";
import {Table} from "antd";

export const CustomTable = styled(Table)`
  max-width: 100%;

  .ant-table-container {
    border: 1px solid #f0f0f0;
    border-right: 0;
    border-bottom: 0;
  }

  table {
    width: 100%;
    border-radius: 2px 2px 0 0;
    border-collapse: separate;
    border-spacing: 0;

    thead>tr>th, tbody>tr>td {
      padding: 16px;
      border-right: 1px solid #f0f0f0;
    }
    
    thead {
      th {
        background-color: #fafafa;
      }
    }

    tbody {
      td {
        border-bottom: 1px solid #f0f0f0;
      }
    }
  }
`;