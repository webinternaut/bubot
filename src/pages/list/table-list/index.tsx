
import { Button, Drawer, Space } from 'antd';
import React, { useState} from 'react';

import { PageContainer } from '@ant-design/pro-layout';

import ProTable from '@ant-design/pro-table';

import type { ProDescriptionsItemProps } from '@ant-design/pro-descriptions';
import ProDescriptions from '@ant-design/pro-descriptions';

import data from './data.json';

const TableList: React.FC = () => {
  const nodeData = data;

  const [showDetail, setShowDetail] = useState<boolean>(false);

  const [currentRow, setCurrentRow] = useState<Data>();

  const columns = [
    {
      title: 'ID',
      dataIndex: 'ID',
      valueType: 'textarea',
      render: (dom, entity) => {
        return (
          <a
            onClick={() => {
              setCurrentRow(entity);
              setShowDetail(true);
            }}
          >
            {dom}
          </a>
        );
      },
    },
    {
      title: 'Unique Identifier',
      dataIndex: 'c_uniqueidentifier',
      valueType: 'textarea',
    },
    {
      title: 'Unique Identifier',
      dataIndex: 'cu_uniqueidentifier',
      valueType: 'textarea',
    },
    {
      title: 'Account Enabled',
      dataIndex: 'cu_accountEnabled',
      valueType: 'textarea',
    },
    {
      title: 'Age Group',
      dataIndex: 'cu_ageGroup',
      valueType: 'textarea',
    },
    {
      title: 'Alt. Sercurity ID',
      dataIndex: 'cu_alternativeSecurityId',
      valueType: 'textarea',
    },
    {
      title: 'City',
      dataIndex: 'cu_city',
      valueType: 'textarea',
    },
    {
      title: 'Consent Provided For Minor',
      dataIndex: 'consentProvidedForMinor',
      valueType: 'textarea',
    },
    {
      title: 'Country',
      dataIndex: 'cu_country',
      valueType: 'textarea',
    },
    {
      title: 'Created Date',
      dataIndex: 'cu_createdDateTime',
      valueType: 'textarea',
    },
    {
      title: 'Type',
      dataIndex: 'cu_creationType',
      valueType: 'textarea',
    },
    {
      title: 'DOB',
      dataIndex: 'cu_dateOfBirth',
      valueType: 'textarea',
    },
    {
      title: 'Department',
      dataIndex: 'cu_department',
      valueType: 'textarea',
    },
    {
      title: 'Name',
      dataIndex: 'cu_displayName',
      valueType: 'textarea',
    },
    {
      title: 'Telephone',
      dataIndex: 'cu_facsimileTelephoneNumber1',
      valueType: 'textarea',
    },
  ];

  const [columnsStateMap, setColumnsStateMap] = useState<Record<string, ColumnsState>>({
    cu_facsimileTelephoneNumber1: {
      show: false,
      order: 2,
    },
    cu_displayName: {
      show: false,
      order: 2,
    },
    cu_department: {
      show: false,
      order: 2,
    },
    cu_dateOfBirth: {
      show: false,
      order: 2,
    },
    cu_creationType: {
      show: false,
      order: 2,
    },
    cu_createdDateTime: {
      show: false,
      order: 2,
    },
    cu_country: {
      show: false,
      order: 2,
    },
    consentProvidedForMinor: {
      show: false,
      order: 2,
    },
  });

  return (
    <PageContainer>
      <ProTable
        columns={columns}
        dataSource={nodeData}
        request={(params) =>
          Promise.resolve({
            data: setUsers.filter((item) => {
              if (!params?.keyWord) {
                return true;
              }
              if (item.name.includes(params?.keyWord) || item.status.includes(params?.keyWord)) {
                return true;
              }
              return false;
            }),
            success: true,
          })
        }
        options={{
          search: true,
        }}
        rowKey="key"
        columnsState={{
          value: columnsStateMap,
          onChange: setColumnsStateMap,
        }}
        search={false}
        dateFormatter="string"
      />
      <Drawer
      title="Node Details"
        width={600}
        visible={showDetail}
        onClose={() => {
          setCurrentRow(undefined);
          setShowDetail(false);
        }}
        extra={
          <Space>
            <Button onClick={() => {
          setCurrentRow(undefined);
          setShowDetail(false);
        }}>Cancel</Button>
            <Button type="primary" onClick={() => {
          setCurrentRow(undefined);
          setShowDetail(false);
        }}>
              OK
            </Button>
          </Space>
        }
      >
        {currentRow?.ID && (
          <ProDescriptions<Data>
            column={2}
            title={currentRow?.ID}
            request={async () => ({
              data: currentRow || {},
            })}
            params={{
              id: currentRow?.ID,
            }}
            columns={columns as ProDescriptionsItemProps<Data>[]}
          />
        )}
      </Drawer>
    </PageContainer>
  );
};

export default TableList;
