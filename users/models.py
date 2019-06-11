from django.db import models
# 导入内置的用户表
from django.contrib.auth.models import User


# 学历的选项
class XueLi(models.Model):
    '''
    1:本科
    2：硕士
    3：博士
    4：博士后
    5：其它
    '''
    id = models.AutoField(primary_key=True)
    xueli_name = models.CharField(max_length=6, null=True, verbose_name="学历")

    def __str__(self):
        return self.xueli_name


# 性别
class sex(models.Model):
    '''
    1:男生
    2：女生
    3：其他
    '''
    id = models.AutoField(primary_key=True)
    sex_name = models.CharField(max_length=2, null=True, verbose_name="性别")

    def __str__(self):
        return self.sex_name



# 创建用户的扩展信息表
class users_more_info(models.Model):
    id = models.AutoField(primary_key=True)
    phone = models.CharField(max_length=11, null=True, verbose_name='手机号码')
    # xueli = models.CharField(max_length=8, null=True, verbose_name="学历")
    xueli = models.ForeignKey(XueLi, on_delete=models.CASCADE, default=1, verbose_name="学历")
    zhuanye = models.CharField(max_length=22, null=True, verbose_name="专业")
    sex = models.ForeignKey(sex, on_delete=models.CASCADE, default=3, verbose_name="性别")
    # 绑定
    user = models.OneToOneField(User, on_delete=models.CASCADE)

    def __str__(self):
        return self.user.username



