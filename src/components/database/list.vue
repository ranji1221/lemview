<template>
  <div class="list_databa datebaselist">
    <lemon-breadcrumb :breadcrumb="breadcrumb"></lemon-breadcrumb>
    <lemon-prompt :alerts="alerts"></lemon-prompt>
    <lemon-list class="database list" :tabledata="tabledatas" :list="list" :items="items" :actions="actions">
    </lemon-list>
    <lemon-pagination :page="page"></lemon-pagination>

  </div>
</template>
<script>
import LemonList from '@/components/common/action/List.vue';
import LemonBreadcrumb from '@/components/common/action/Breadcrumb.vue';
import LemonPrompt from '@/components/common/prompt/Prompt.vue';
import LemonPagination from '@/components/common/action/Pagination.vue';
import "@/assets/style/common/list.css"
import { mapState, mapMutations, mapGetters, mapActions } from 'vuex';

export default {
  components: {
    LemonList, LemonBreadcrumb, LemonPagination, LemonPrompt
  },
  created() {
    this.$root.eventHub.$off('delelistitem')
    //	监听列表删除事件
    this.$root.eventHub.$on('delelistitem', function(rowid, list) {
      this.tabledatas = this.tabledatas.slice(rowid, -1)
      console.log(rowid, list);
    }.bind(this));
  },
  methods: {
    createmodal: function(id, type, list) {
      this.is_mask(true);
      //获取一组查看模态框数据并插入到查看数组中,以实现新建模态框的效果
      var datatype;
      var newdata;
          datatype = 'viewdata';
          newdata = {
            datalist: {
              '角色名称': 'UI设计师' + id,
              '父级角色': '首页',
              '依赖角色': '员工',
              '最大限制用户数': '6',
              '备注消息': 'UI设计师为研发部门付出了艰辛的努力',
            },
            open: true,
            show: true,
            id: id,
            lg: false,
            list: list,
            title: "提示信息",
            type: type,
          };
      var payload = {};
      payload.datatype = datatype;
      payload.newdata = newdata;
      console.log('新建完成')
      this.create_modal(payload);
    }
  },
  data() {
    return {
      list: "datebaselist",
      breadcrumb: {
        search: true,
      },
      //    分页数据
      page: {
        size: 10,
        total: 19,
        tfootbtns: {
          btns: false,//是否添加按钮组
          create: false,//新建按钮
          refresh: false,//刷新按钮
          delete: false, //删除按钮      	
        }
      },
      //    弹窗数据
      alerts: [{
        title: '温馨提示：本功能在恢复数据的同时，将全部覆盖原有数据！ 单击右方x号，你可以关闭此条提示语！  ',
        type: 'info'
      }],
      //    表格数据
      tabledatas: [
        {
          id: 'xxx数据库',
          name: "2017/01/01",
          fath: "823k",
          remarks: "查看备注",
          rowType: '数据库'
        },
        {
          id: 'xxx数据库',
          name: "2017/01/01",
          fath: "823k",
          remarks: "查看备注",
          rowType: '数据库'
        },
        {
          id: 'xxx数据库',
          name: "2017/01/01",
          fath: "823k",
          remarks: "查看备注",
          rowType: '数据库'
        },
        {
          id: 'xxx数据库',
          name: "2017/01/01",
          fath: "823k",
          remarks: "查看备注",
          rowType: '数据库'
        },
      ],
      //表头项
      items: [
        {
          id: 1,
          prop: 'id',
          label: "文件名",
          sort: true,
          width: "245"
        },
        {
          id: 2,
          prop: 'name',
          label: "备份时间",
          sort: true,
        },
        {
          id: 3,
          prop: 'fath',
          label: "大小",
          sort: true,

        },
        {
          id: 4,
          prop: 'remarks',
          label: "备注",
          class: "remarks",
          sort: true,
        },
      ],
      actions: {
        selection: false,
        view: false,
        edit: false,
        dele: true,
        ault: false,
        import: true
      }
    }
  }
}
</script>
