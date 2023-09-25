import { Platform } from "react-native"
import * as FileSystem from "expo-file-system"
import { Asset } from "expo-asset"

export async function copyAssetToCacheAsync(assetModule: string | number, localFilename: string) {
  if (Platform.OS === "ios") return assetModule

  const localUri = `${FileSystem.cacheDirectory}asset_${localFilename}`
  const fileInfo = await FileSystem.getInfoAsync(localUri, { size: false })
  if (!fileInfo.exists) {
    const asset = Asset.fromModule(assetModule)
    await asset.downloadAsync()
    console.log(`copyAssetToCacheAsync ${asset.localUri} -> ${localUri}`)
    await FileSystem.copyAsync({
      from: asset.localUri,
      to: localUri,
    })
  }
  return localUri
}
