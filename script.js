try {
                // Tell the AI exactly where to find its required files on the internet
                const config = {
                    publicPath: "https://cdn.jsdelivr.net/npm/@imgly/background-removal@1.4.3/dist/"
                };

                // Run the background removal locally with the configuration
                const imageBlob = await imglyRemoveBackground(imageUrl, config);
                
                // Display the result
                const resultUrl = URL.createObjectURL(imageBlob);
                resultImage.src = resultUrl;
                resultImage.style.display = "block";
                statusText.innerText = "Background removed successfully!";

            } catch (error) {
                console.error(error);
                statusText.innerText = "Something went wrong. Check the console.";
            }