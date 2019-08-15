# CircleCI

### Deploying Storybook

```
ssh-keygen -m PEM -t rsa -b 4096 -C "your@email.com"
```

- No password.
- Add new SSH key in CircleCI
- Host: github.com
- Copy and paste the private key
- In `circleci/config.yml` add a new step:
  ```
  - add_ssh_keys:
      fingerprints:
        - "23:6a:3d:12:bb:77:c0:b8:18:cc:72:56:8d:c4:91:a5"
  ```
