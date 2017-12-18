import Mock from 'mockjs';

export default Mock.mock('http://data.cn', {
      'tabledatas|1-100':[
        {
          'id|+1': 1,
          name:"首页1",
          fath:"首页",
          rowType: '角色'
        }
      ],

});