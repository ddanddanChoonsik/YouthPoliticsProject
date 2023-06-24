package data.dto;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class JwtUser {
    private String id;
    private String name;
}
