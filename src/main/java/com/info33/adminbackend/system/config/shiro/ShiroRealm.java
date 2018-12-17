package com.info33.adminbackend.system.config.shiro;


import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.info33.adminbackend.system.entity.SysUser;
import com.info33.adminbackend.system.service.ISysUserService;
import lombok.extern.slf4j.Slf4j;
import org.apache.shiro.authc.*;
import org.apache.shiro.authz.AuthorizationInfo;
import org.apache.shiro.authz.SimpleAuthorizationInfo;
import org.apache.shiro.realm.AuthorizingRealm;
import org.apache.shiro.subject.PrincipalCollection;
import org.springframework.beans.factory.annotation.Autowired;



@Slf4j
public class ShiroRealm extends AuthorizingRealm {


    @Autowired
    private ISysUserService iSysUserService;

    /**
     * 认证信息.(身份验证) : Authentication 是用来验证用户身份
     */
    @Override
    protected AuthenticationInfo doGetAuthenticationInfo(AuthenticationToken authcToken) throws AuthenticationException {
            log.info("---------------- 执行 Shiro 凭证认证 ----------------------");
            UsernamePasswordToken token = (UsernamePasswordToken) authcToken;
            String name = token.getUsername();
            log.info("name:" + name);

            // 从数据库获取对应用户名密码的用户
            SysUser user = iSysUserService.getOne(new QueryWrapper<SysUser>().eq("login_name", name));
            log.info("user:" + user);

            if (user != null) {
                // 用户为禁用状态'数据状态 1可用，0不可用'
                if (user.getStatus().equals("0")) {
                    throw new DisabledAccountException();
                }
                log.info("---------------- Shiro 凭证认证成功 ----------------------");
                SimpleAuthenticationInfo authenticationInfo = new SimpleAuthenticationInfo(
                        user, //用户
                        user.getPassword(), //密码
                        getName()  //realm name
                );
                return authenticationInfo;
            }
        throw new UnknownAccountException();
    }

    /**
     * 授权
     */
    @Override
    protected AuthorizationInfo doGetAuthorizationInfo(PrincipalCollection principals) {
        log.info("---------------- 执行 Shiro 权限获取 ---------------------");
//        Object principal = principals.getPrimaryPrincipal();
//        SimpleAuthorizationInfo info = new SimpleAuthorizationInfo();
//        if (principal instanceof User) {
//            User userLogin = (User) principal;
//            if(userLogin != null){
//                List<Role> roleList = roleService.findByUserid(userLogin.getId());
//                if(CollectionUtils.isNotEmpty(roleList)){
//                    for(Role role : roleList){
//                        log.info(role.getEnname());
//                        info.addRole(role.getEnname());
//
//                        List<Menu> menuList = menuService.getAllMenuByRoleId(role.getId());
//                        if(CollectionUtils.isNotEmpty(menuList)){
//                            for (Menu menu : menuList){
//                                if(StringUtils.isNoneBlank(menu.getPermission())){
//                                    info.addStringPermission(menu.getPermission());
//                                }
//                            }
//                        }
//                    }
//                }
//            }
//        }
//        log.info("---------------- 获取到以下权限 ----------------");
//        log.info(String.valueOf(info));
//        log.info(info.getStringPermissions().toString());
//        log.info("---------------- Shiro 权限获取成功 ----------------------");
//        return info;


        SimpleAuthorizationInfo info = new SimpleAuthorizationInfo();
        info.addRole("admin");
        info.addStringPermission("admin");
        return info;

    }
}
