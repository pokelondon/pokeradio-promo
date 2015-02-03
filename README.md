# Poke Radio - promo site

## Description

Promo site for Poke Radio

## Dependencies

1. VirtualBox
2. Vagrant 1.1+
3. Poke Salt States Installed
4. Vagrant Guest Additions Gem
5. Salt Vagrant Provisioner Gem

### 1. Install VirtualBox

Just grab the installer from the VirtualBox site:

https://www.virtualbox.org/wiki/Downloads

### 2. Install Vagrant

Grab the installer from the Vagrant site:

http://downloads.vagrantup.com

### 3. Install the Poke Salt States

The Poke Salt States are the same states we use in production as well as development. One State Tree to rule them all as they say. If you have not already done so run:

``curl -L -u 'your_github_username' https://raw.github.com/pokelondon/Salt-States/master/tools/install.sh | sh``

Replace **your_github_username** with your GitHub user name. This will install the Poke Salt States to `~/.salt-poke`.

### 4. Guest Additions Plugin Installation

To ensure your Vagrant Box also ways has the guest additions most suitable to your VirtualBox version, from the OSX command line run:

``vagrant plugin install vagrant-vbguest``

When you run ``vagrant up`` the guest additions for your box will be installed automatically.

If you upgrade your VirtualBox to a new version you will need to run ``vagrant reload`` for the new guest additions version to be installed.

### 5. Salt Vagrant Provisioner

To install the Salt Provisioner run the following command on OSX:

``vagrant plugin install vagrant-salt``

### Installation

This project is based on Vagrant. Please see the wiki documentation for getting your base Vagrant setup ready: http://dokuwiki.inside.poke/dokuwiki/doku.php?id=vagrant. The rest of this readme assumes you have this done.

 1. Clone the repository into ~/Development/jacobs/snack/ or where ever you feel is appropriate for you.
 2. Run ``vagrant up`` from the project root.
 3. Once ``vagrant up`` has finished ssh into the instance: ``vagrant ssh``.

# Developers

 * Jamie Ingram
