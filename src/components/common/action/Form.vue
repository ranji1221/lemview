<template>
    <el-form ref="form" class="role_form" :model="forms" size="medium">
        <template>
            <p>青柠云后台管理系统</p>
        </template>
        <el-form-item v-for="(form,index) in forms" :key="index" :label="form.label" :class="{textarea:form.type=='remarks'}">
            <template v-if="form.type=='text'">
                <el-input class="roleinput" v-model="form.text" :placeholder="form.default"></el-input>
            </template>
            <template v-else-if="form.type=='remarks'">
                <el-input type="textarea" v-model="form.text" :placeholder="form.default"></el-input>
            </template>
            <template v-else-if="form.type=='select'">
                <el-select class="select" v-model="form.text" :placeholder="form.selected">
                    <el-option v-for="(item,index) in form.childrens" :key="index" :label="item.label" :value="item.value">
                    </el-option>
                </el-select>
            </template>
            <template v-else-if="form.type=='number'">
                <el-input-number v-model="form.text" class="maxnum" size="mini" :min="form.min" :max="form.max" label="描述文字"></el-input-number>
            </template>
            <template v-hide="form.type=='options'"></template>
        </el-form-item>
        <div class="options">
            <el-form-item v-for="(option,index) in forms.option.arr" :key="index">
                <template v-if="option.type=='text'">
                        <el-input class="option_text" v-model="option.text" :placeholder="option.default" ></el-input>
                </template>
                <template v-if="option.type=='select'">
                    <el-select class="option_select" v-model="option.text" :placeholder="option.selected">
                        <el-option v-for="(item,index) in option.childrens" :key="index" :label="item.label" :value="item.value">
                        </el-option>
                    </el-select>
                </template>
            </el-form-item>
        </div>
        <div class="btns">
            <el-button class="btn_succse btn" type="primary" @click="onSubmit">确认</el-button>
            <el-button class="btn_cancel btn">取消</el-button>
        </div>
    </el-form>
</template>

<script>
import "@/assets/style/common/Form.css";
export default {
    props: ["forms"],
    mounted: function() {

    },
    methods: {
        onSubmit() {
            console.log('submit!');
        }
    }

}
</script>

