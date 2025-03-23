# Web Application based on Node.JS and Flask on DigitalOcean Kubernetes (DOKS)

This is a sample web application deployed on DigitalOcean using a Kubernetes cluster and a loadbalancer.

## Deployment steps

### Creation of Kubernetes cluster

- Creation of a Kubernetes cluster can be done either using the DO console or using CLI. Using console, it is pretty-straitforward. You will be creating a cluster and an associated nodepool by specifying the minimum and maximum number of nodes. I have choosen minimum as 1 and maximum as 3. You can use below steps to create using CLI:

1. Generate an API token by visting [here](https://cloud.digitalocean.com/account/api/tokens)

2. Install doctl on your machine following the steps from [here](http://docs.digitalocean.com/reference/doctl/how-to/install/)

3. Create a kubernetes cluster using the below command:
```console
 doctl kubernetes cluster create <name> [flags]
 doctl kubernetes cluster create example-cluster --region nyc1 --version 1.28.2-do.0 --maintenance-window saturday=02:00 --node-pool "name=example-pool;size=s-2vcpu-2gb;count=5;tag=web;tag=frontend;label=key1=value1;label=key2=label2;taint=key1=value1:NoSchedule;taint=key2:NoExecute"
```

### Connect to the cluster

- In order to connect to the cluster, use the below command:
```console
doctl kubernetes cluster kubeconfig save use_your_cluster_name
```

### Apply the manifest files

- Apply the manifest files using the below command:
```console
kubectl apply -f deployment-files/.
```

### Verify the deployment

- Run the below command to get the status of the service:
```console
kubectl get services
```
- It will take around 2-3 minutes for the loadbalancer to come to "Active" state and the external IP address will be visible in the output of the above command.

- Visit the website over the IP address to check the functionality.



![DO_Powered_by_Badge_blue](https://github.com/user-attachments/assets/7a233410-546b-4d98-b732-623afe212b10)
