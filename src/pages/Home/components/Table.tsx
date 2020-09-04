import React from 'react'
import { Table } from 'antd'

import { Repository } from '../graphql/repositoriesQuery'

const columns = [
  {
    title: 'Name',
    dataIndex: ['repo', 'url'],
    render: (text: string) => <a href={text}>{text}</a>,
  },
  {
    title: 'Stars',
    dataIndex: ['repo', 'forkCount'],
  },
  {
    title: 'Forks',
    dataIndex: ['repo', 'stargazers', 'totalCount'],
  },
]

const RepositoriesTable = ({
  data,
  isLoading,
}: {
  data: { repo: Repository }[] | undefined
  isLoading: boolean
}) => <Table bordered={true} columns={columns} dataSource={data} loading={isLoading} />

export default RepositoriesTable
