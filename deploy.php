<?php
namespace Deployer;

require 'recipe/laravel.php';

// Project name
set('application', 'personal_portfolio');

// Project repository
set('repository', 'https://github.com/thaiq8nguyen/personal_portfolio.git');

// [Optional] Allocate tty for git clone. Default value is false.
set('git_tty', true); 

// Shared files/dirs between deploys 
add('shared_files', []);
add('shared_dirs', []);

// Writable dirs by web server 
add('writable_dirs', []);


// Hosts

host('192.241.218.147')
    ->user('deployer')
    ->identityFile('~/.ssh/do_deployerkey')
    ->set('deploy_path', '/var/www/html/personal_portfolio');    
    
// Tasks

task('build', function () {
    run('cd {{release_path}} && build');
});

// [Optional] if deploy fails automatically unlock.
after('deploy:failed', 'deploy:unlock');

// Migrate database before symlink new release.

before('deploy:symlink', 'artisan:migrate');

