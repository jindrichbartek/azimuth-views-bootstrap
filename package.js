Package.describe({
    summary: "Azimuth CMS frontend templates (using Bootstrap 2.x)"
});

Package.on_use(function (api) {
  api.use(['less'], 'client');
  api.use(['templating'], 'client');
  api.use(['bootstrap'], 'client');
  api.use(['azimuth-core'], 'client', {unordered: true});

  api.add_files([
    'css/style.less',
    'blocks/four_column/four_column.html',
    'blocks/four_column/four_column_edit.html',
    'blocks/six_column/six_column.html',
    'blocks/six_column/six_column_edit.html',
    'blocks/three_column/three_column.html',
    'blocks/three_column/three_column_edit.html',
    'blocks/twelve_column/twelve_column.html',
    'blocks/twelve_column/twelve_column_edit.html',
    'blocks/two_column/two_column.html',
    'blocks/two_column/two_column_edit.html',
    'pages/home_page/home_page.html',
    'pages/home_page/home_page_edit.html',
    'pages/page_default/page_default.html',
    'pages/page_default/page_default_edit.html',
    'pages/sidebar_left/sidebar_left.html',
    'pages/sidebar_left/sidebar_left_edit.html',
    'pages/sidebar_left_fixed/sidebar_left_fixed.html',
    'pages/sidebar_left_fixed/sidebar_left_fixed_edit.html',
    'pages/sidebar_right/sidebar_right.html',
    'pages/sidebar_right/sidebar_right_edit.html',
    'views/layout.html',
    'views/404.html',
    'views/loading.html',
    'views/not_authorized.html',
    'views/accounts/account_buttons.html',
    'views/accounts/error.html',
    'views/accounts/forgot_password.html',
    'views/accounts/login.html',
    'views/accounts/sign_up.html',
    'views/accounts/social.html',
    'views/admin/admin_users.html',
    'views/admin/navigation.html',
    'views/admin/site_settings.html',
    'views/admin/assets.html',
    'views/blocks/block_display.html',
    'views/blocks/block_zone_editor.html',
    'views/blocks/modals/delete_block.html',
    'views/blocks/modals/edit_block.html',
    'views/blocks/modals/existing_block.html',
    'views/blocks/modals/tag_block.html',
    'views/footer.html',
    'views/form/tag.html',
    'views/form/text.html',
    'views/form/textarea.html',
    'views/form/wysiwyg.html',
    'views/form/metadata.html',
    'views/header.html',
    'views/header_nav.html',
    'views/pages/new_page.html',
    'views/pages/page_edit_bottom.html',
    'views/pages/page_template_selector.html',
    'lib/utils.js'
  ], 'client');
});

