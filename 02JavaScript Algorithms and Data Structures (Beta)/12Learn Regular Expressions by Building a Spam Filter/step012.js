const isSpam = (msg) => denyList.some((regex) => regex.test(msg));
